import requests
import json
from cal import cals, autoCalAMD, autoCalNvidia

aGpu = ''
nGpu = ''
adopt_gpu = ''
valueBool = True
ethash = zhash = cnheavy = cngpu = cryptonightR = cnfast = aion = cuckoocycle = cuckaroo29 = cuckaroom29 = cuckatoo31 = beam = randomx = neoscrypt = timetravel10 = x16rv2 = phi2 = equihashzero = zelhash = progpow = x25x = lyra2rev3 = '0'

#Get GPU model by user
while valueBool :
    print('===' * 14)
    print('What GPU brand do you use for your mining?')
    print('===' * 14)
    GPU = input('AMD or NVIDIA (Aa/Nn) : ')
    print('\n')
    if GPU in 'Aa':
        AMD = input('What AMD GPU model you have?\n'
                    '1: 380\n'
                    '2: Fury\n'
                    '3: 470\n'
                    '4: 480\n'
                    '5: 580\n'
                    '6: Vega56\n'
                    '7: Vega64\n'
                    # '8: 5700XT\n'
                    '8: VII\n'
                    'Please Select 1/9: ')
        models = {'1': '380',
                  '2': 'Fury',
                  '3': '470',
                  '4': '480',
                  '5': '580',
                  '6': 'Vega56',
                  '7': 'Vega64',
                #   '8': '5700XT',
                  '8': 'VII'}
        if AMD in models:
            print('\n')
            adopt_gpu = 'amd'
            aGpu = models[AMD]
            numGpu = input('How many AMD '+aGpu+' Do you have (Only numbers): ')
            print('\n')
            valueBool = False
    elif GPU in 'Nn':
        NVIDIA = input('What NVIDIA GPU model you have?\n'
                       '1: 1050Ti\n'
                       '2: 1060\n'
                       '3: 1070\n'
                       '4: 1070Ti\n'
                       '5: 1080\n'
                       '6: 1080Ti\n'
                       '7: 1660\n'
                       '8: 1660Ti\n'
                       '9: 2060\n'
                       '10: 2070\n'
                       '11: 2080\n'
                       '12: 2080Ti\n'
                       'Please select 1/12: ')
        models = {'1': '1050Ti',
                  '2': '1060',
                  '3': '1070',
                  '4': '1070Ti',
                  '5': '1080',
                  '6': '1080Ti',
                  '7': '1660',
                  '8': '1660Ti',
                  '9': '2060',
                  '10': '2070',
                  '11': '2080',
                  '12': '2080Ti'}
        if NVIDIA in models:
            print('\n')
            adopt_gpu = 'nvidia'
            nGpu = models[NVIDIA]
            numGpu = input('How many NVIDIA '+nGpu+' Do you have (Only number): ')
            print('\n')
            valueBool = False

    elif GPU in 'BbCcDdEeFfGgHhIiJjKkLlMmOoPpQqWwRrTtYyUuSsZzXxCcVv':
        print('You need to input correct value , Please try again\n')
        valueBool = True
        
hashValue = input('Do you want Brainer automatically set your hashrate based on your GPUs or you want to put them manually Y/N: ')
if hashValue in 'Nn':
   print('Please wait ......\n')
   print("Enter each algo's hashrate:\n")
   ethash = input('Whats is you Ethash hashrate: ')
   zhash = input('Whats is you ZHash hashrate: ')
   cnheavy = input('Whats is you CNHeavy hashrate: ')
   cngpu = input('Whats is you CNGPU hashrate: ')
   cryptonightR = input('Whats is you CryptoNightR hashrate: ')
   cnfast = input('Whats is you CNfast hashrate: ')
   aion = input('Whats is you Aion hashrate: ')
   cuckoocycle = input('Whats is you CuckooCycle hashrate: ')
   cuckaroo29 = input('Whats is you Cuckaroo29 hashrate: ')
   cuckaroom29 = input('Whats is you Cuckaroom29 hashrate: ')
   cuckatoo31 = input('Whats is you Cuckatoo31 hashrate: ')
   beam = input('Whats is you BEAM hashrate: ')
   randomx = input('Whats is you RandomX hashrate: ')
   neoscrypt = input('Whats is you NeoScrypt hashrate: ')
   timetravel10 = input('Whats is you TimeTravel10 hashrate: ')
   x16rv2 = input('Whats is you X16Rv2 hashrate: ')
   phi2 = input('Whats is you PHI2 hashrate: ')
   equihashzero = input('Whats is you EquihashZero hashrate: ')
   zelhash = input('Whats is you ZelHash hashrate: ')
   progpow = input('Whats is you ProgPOW hashrate: ')
   x25x = input('Whats is you X25X hashrate: ')
   mtp = input('Whats is you MTP hashrate: ')
   lyra2rev3 = input('Whats is you Lyra2REv3 hashrate: ')

   # Saving manually inputed hashrate by user for later comparison
   lastManualHash = {'ethash': ethash, 'zhash': zhash, 'cnheavy': cnheavy, 'cngpu': cngpu, 'cryptonightR': cryptonightR, 'cnfast': cnfast, 'aion': aion, 'cuckoocycle': cuckoocycle, 'cuckaroo29': cuckaroo29, 'cuckaroom29': cuckaroom29, 'cuckatoo31': cuckatoo31, 'beam': beam, 'randomx': randomx, 'neoscrypt': neoscrypt, 'timetravel10': timetravel10, 'x16rv2': x16rv2, 'phi2': phi2, 'equihashzero': equihashzero, 'zelhash': zelhash, 'progpow': progpow, 'x25x': x25x, 'mtp': mtp, 'lyra2rev3': lyra2rev3}
   
   coinValue = cals(ethash,zhash,cnheavy,cngpu,cryptonightR,cnfast,aion,cuckoocycle,cuckaroo29,cuckaroom29,cuckatoo31,beam,randomx,neoscrypt,
   timetravel10,x16rv2,phi2,equihashzero,zelhash,progpow,x25x,mtp,lyra2rev3)
elif hashValue in 'Yy':
    print('Please wait ......\n')
    if adopt_gpu == 'amd':
        coinValue = autoCalAMD(aGpu, numGpu)
    else:
        coinValue = autoCalNvidia(nGpu, numGpu)
#coinValue = cals(ethash,zhash,cnheavy,cngpu,cryptonightR,cnfast,aion,cuckoocycle,cuckaroo29,cuckaroom29,cuckatoo31,beam,randomx,neoscrypt,timetravel10,x16rv2,phi2,equihashzero,zelhash,progpow,x25x,mtp,lyra2rev3)

# print(coinValue)
