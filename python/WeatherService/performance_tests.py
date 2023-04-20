from locust import HttpUser, task, between
import json

class PerformanceTests(HttpUser):
    wait_time = between(1, 3)

    @task(1)
    def testFastApi(self):
        params = {
            'city': 'TarguMures',
            'hourly': 'temperature_2m,rain,snowfall',
            'forecast_days': '1',
            'timezone': 'auto'
        }
        token = 'ghu_wHlVHgqbt02buL1PDx5tVMLFHZVyFS3tN1OL'
        headers = {'Accept': 'application/json', 'Authorization': token}
        self.client.get("/home", params=params, headers=headers)
