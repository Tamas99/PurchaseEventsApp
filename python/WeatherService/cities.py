from enum import Enum

# cities = {
#     '46.54,24.56': 'Targu Mures',
#     '46.77,23.60': 'Cluj Napoca',
#     '51.51,-0.13': 'London'
# }

class Cities(Enum):
    TarguMures = {'latitude': '46.54', 'longitude': '24.56'}
    ClujNapoca = {'latitude': '46.77', 'longitude': '23.60'}
    London = {'latitude': '51.51', 'longitude': '-0.13'}
