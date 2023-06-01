from elasticsearch_store import ElasticsearchStore
from locust import HttpUser, TaskSet, between, events, task
import uuid


class UserTaskSet(TaskSet):
    @task(1)
    def index_page(self):
        self.client.get("/home")


class LocustUser(HttpUser):
    wait_time = between(1, 10)

    def __init__(self, environment):
        super(LocustUser, self).__init__(environment)
        self.store = ElasticsearchStore("performance_data")

        def request_success_handler(request_type, name, response_time, response_length, *args, **kwargs):
            self.store.save_data(request_type=request_type, name=name,
                                 response_time=response_time, response_length=response_length, exception=None)

        def request_failure_handler(request_type, name, response_time, response_length, exception, *args, **kwargs):
            self.store.save_data(request_type=request_type, name=name, response_time=response_time,
                                 response_length=response_length, exception=exception)

        events.request.add_listener(request_success_handler)
        events.request.add_listener(request_failure_handler)

    @task(1)
    def testFastApi(self):
        self.client.post(url="/create", json={'name': 'user' + str(uuid.uuid4()), 'password': 'password'})
        self.client.post(url="/kafka_send", json={'message': 'This is a kafka message'})
        self.client.get("/home")
        self.client.get("/get")
        weather_params = {
            'city': 'TarguMures',
            'hourly': 'temperature_2m,rain,snowfall',
            'daily': 'temperature_2m_max,temperature_2m_min,sunrise,sunset',
            'forecast_days': '1',
            'timezone': 'auto',
        }
        self.client.get("/weather", params=weather_params)
        weather_params['forecast_days'] = '3'
        self.client.get("/weather", params=weather_params)
        weather_params['forecast_days'] = '5'
        self.client.get("/weather", params=weather_params)
