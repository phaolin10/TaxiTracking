from flask import Flask, jsonify
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from collections import Counter

serviceKey = {
  #Your Service Key must be here
}

app = Flask(__name__)

cred = credentials.Certificate(serviceKey) 
firebase_admin = firebase_admin.initialize_app(cred, {'databaseURL': ''}) #database url must be here 
ref = db.reference('data')
data= ref.get()
data2 = ref.get()
data3 = ref.get()

def Query1():
    for i in range(0,len(data)):
        for j in range(0,len(data)):
            if data[i].get('trip_distance') > data[j].get('trip_distance'):
                tmp = data[j]
                data[j] = data[i]
                data[i] = tmp
    response = []
    for i in range(0,5):
        dict = {
            "day":data[i].get('tpep_pickup_datetime'),
            "distance":data[i].get('trip_distance')
        }
        response.append(dict)
    print(response)
    return response

def Query2():
    getHT = [] 
    splitHT = [] 
    total = 0
    count = 0
    countt = 0
    totalS = []
    countS = []
    averageJusts = []
    d3 = []
    j = 0
    response = []
    print(data2[0].get('total_amount'))
    print(data2[1].get('total_amount'))
    for i in range(0, len(data)):
        dict = {
            "HT": data[i].get('tpep_pickup_datetime')
        }
        getHT.append(dict['HT'])
        splitHT.append((getHT[i].split()))
        d1 = sorted([item[0] for item in splitHT])
        d2 = [item[1] for item in splitHT]
    for i in range(0, len(data)):
        total = total+float(data2[i].get('total_amount'))
        count = count+1
        j = j + 1
        if(d1[i] != d1[j]):
            totalS.append(total)
            countS.append(count)
            d3.append(d1[i])
            print("{} - {}".format(d1[i], round(totalS[countt], 2)))
            averageJust = round(totalS[countt]/countS[countt], 2)
            print(averageJust)
            averageJusts.append(averageJust)
            total = 0
            count = 0
            countt = countt+1
        if(d1[i] == "2020-12-31"):
            totalS.append(total)
            countS.append(count)
            d3.append(d1[i])
            print("{} - {}".format(d1[i], round(totalS[countt], 2)))
            averageJust = round(totalS[countt]/countS[countt], 2)
            print(averageJust)
            total = 0
            count = 0
            countt = countt+1
        if(d1[i+1] == "2020-12-31"):
            break
    Min1 = min(averageJusts)
    Insert1 = averageJusts.index(Min1)
    print(averageJusts)
    averageJusts.remove(Min1)
    Min2 = min(averageJusts)
    averageJusts.insert(Insert1, Min1)
    print(averageJusts)
    print("minimum değerler ",Min1,"-",Min2)
    for i in range(averageJusts.index(Min1), (averageJusts.index(Min2)+1)):
        print("{} - {}".format(d3[i], averageJusts[i]))
        dict = {
            "day" : d3[i],
            "average" : averageJusts[i]
        }
        response.append(dict)

    print(response)

    return response

def Query3():
    PULocationIDs = []
    DOLocationIDs = []
    trip_distances = []
    response = []
    for i in range(0, len(data3)):
        if(data3[i].get('passenger_count') >= 3 and data3[i].get('trip_distance') != 0.0):
            PULocationIDs.append(data3[i].get('PULocationID'))
            DOLocationIDs.append(data3[i].get('DOLocationID'))
            trip_distances.append(data3[i].get('trip_distance'))

    MaxDistance = max(trip_distances)
    MinDistance = min(trip_distances)
    print(MaxDistance)
    print(MinDistance)
    print(PULocationIDs)
    print(DOLocationIDs)
    print(trip_distances)

    for i in range(0, len(trip_distances)):
        if(trip_distances[i] == MaxDistance):
            MaxDistancePULocationID = PULocationIDs[i]
            MaxDistanceDOLocationID = DOLocationIDs[i]
            print("Max:{} => {} - {} ".format(trip_distances[i], MaxDistancePULocationID,
                  MaxDistanceDOLocationID))
            dict = {
                "distance" : trip_distances[i],
                "PULocationMax" : MaxDistancePULocationID,
                "DOLocationMax":MaxDistanceDOLocationID
            }
            response.append(dict)
        if(trip_distances[i] == MinDistance):
            MinDistancePULocationID = PULocationIDs[i]
            MinDistanceDOLocationID = DOLocationIDs[i]
            print("Min:{} => {} - {} ".format(trip_distances[i], MinDistancePULocationID,
                  MinDistanceDOLocationID))
            dict = {
                "distance" : trip_distances[i],
                "PULocationMax" : MinDistancePULocationID,
                "DOLocationMax":MinDistanceDOLocationID
            }
            response.append(dict)

    return response

@app.route('/',methods=['GET'])
def show_all():
    return "a"

@app.route('/getQuery1',methods=['GET'])
def getQuery1():
    response = Query1()
    return jsonify(response)


@app.route('/getQuery2',methods=['GET'])
def GetQuery2():
    response = Query2()
    return jsonify(response)

@app.route('/getQuery3',methods=['GET'])
def GetQuery3():
    response = Query3()
    return jsonify(response)


app.run(host='localhost',port=8000)
