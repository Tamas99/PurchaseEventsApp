import pandas as pd
import numpy as np

fastapi = pd.read_csv('../jmeter/fastapi_low_late.csv')
springboot = pd.read_csv('../jmeter/springboot_high.csv')
nodejs = pd.read_csv('../jmeter/nodejs_high.csv')

fastapi_bytes = np.array(fastapi['bytes'])
springboot_bytes = np.array(springboot['bytes'])
nodejs_bytes = np.array(nodejs['bytes'])
fastapi_bytes.sort()
springboot_bytes.sort()
nodejs_bytes.sort()

fastapi_bytes.sort()
springboot_bytes.sort()
nodejs_bytes.sort()

print(fastapi_bytes)
print(springboot_bytes)
print(nodejs_bytes)

