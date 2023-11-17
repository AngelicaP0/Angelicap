import requests
import pandas as pd

api_url = "http://localhost:3001/productos"
response = requests.get(api_url)

if response.status_code == 200:
    data_json = response.json() 
else:
    print("Error al obtener datos de la API")
    exit()

data_list = data_json

df = pd.DataFrame(data_list)

excel_file = "datos_ecommerce.xlsx"
df.to_excel(excel_file, index=False)

print(f"Datos guardados en {excel_file}")
