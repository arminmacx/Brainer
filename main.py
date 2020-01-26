import bs4
import requests
from bs4 import BeautifulSoup
import json
from cal import cals, autoCalAMD

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
   coinValue = cals(ethash,zhash,cnheavy,cngpu,cryptonightR,cnfast,aion,cuckoocycle,cuckaroo29,cuckaroom29,cuckatoo31,beam,randomx,neoscrypt,timetravel10,x16rv2,phi2,equihashzero,zelhash,progpow,x25x,mtp,lyra2rev3)
elif hashValue in 'Yy':
    print('Please wait ......\n')
    coinValue = autoCalAMD(aGpu, numGpu)
#coinValue = cals(ethash,zhash,cnheavy,cngpu,cryptonightR,cnfast,aion,cuckoocycle,cuckaroo29,cuckaroom29,cuckatoo31,beam,randomx,neoscrypt,timetravel10,x16rv2,phi2,equihashzero,zelhash,progpow,x25x,mtp,lyra2rev3)

# print(coinValue)



#https://whattomine.com/coins?utf8=%E2%9C%93&adapt_q_380=0&adapt_q_fury=0&adapt_q_470=0&adapt_q_480=3&adapt_q_570=0&adapt_q_580=0&adapt_q_vega56=0&adapt_q_vega64=0&adapt_q_5700xt=0&adapt_q_vii=0&adapt_q_1050Ti=0&adapt_q_10606=0&adapt_q_1070=0&adapt_q_1070Ti=3&adapt_q_1080=0&adapt_q_1080Ti=0&adapt_q_1660=0&adapt_q_1660Ti=0&adapt_q_2060=0&adapt_q_2070=0&adapt_q_2080=0&adapt_q_2080Ti=0&eth=true&factor%5Beth_hr%5D=96.0&factor%5Beth_p%5D=390.0&zh=true&factor%5Bzh_hr%5D=177.0&factor%5Bzh_p%5D=390.0&cnh=true&factor%5Bcnh_hr%5D=2520.0&factor%5Bcnh_p%5D=330.0&cng=true&factor%5Bcng_hr%5D=4500.0&factor%5Bcng_p%5D=390.0&cnr=true&factor%5Bcnr_hr%5D=1500.0&factor%5Bcnr_p%5D=360.0&cnf=true&factor%5Bcnf_hr%5D=4260.0&factor%5Bcnf_p%5D=330.0&eqa=true&factor%5Beqa_hr%5D=615.0&factor%5Beqa_p%5D=390.0&cc=true&factor%5Bcc_hr%5D=15.3&factor%5Bcc_p%5D=390.0&cr29=true&factor%5Bcr29_hr%5D=18.0&factor%5Bcr29_p%5D=390.0&cm29=true&factor%5Bcm29_hr%5D=6.6&factor%5Bcm29_p%5D=390.0&ct31=true&factor%5Bct31_hr%5D=0.0&factor%5Bct31_p%5D=0.0&eqb=true&factor%5Beqb_hr%5D=129.0&factor%5Beqb_p%5D=390.0&rmx=true&factor%5Brmx_hr%5D=1920.0&factor%5Brmx_p%5D=360.0&ns=true&factor%5Bns_hr%5D=3900.0&factor%5Bns_p%5D=390.0&tt10=true&factor%5Btt10_hr%5D=93.0&factor%5Btt10_p%5D=390.0&x16r=true&factor%5Bx16r_hr%5D=70.0&factor%5Bx16r_p%5D=390.0&phi2=true&factor%5Bphi2_hr%5D=19.5&factor%5Bphi2_p%5D=390.0&eqz=true&factor%5Beqz_hr%5D=98.4&factor%5Beqz_p%5D=390.0&zlh=true&factor%5Bzlh_hr%5D=108.0&factor%5Bzlh_p%5D=390.0&ppw=true&factor%5Bppw_hr%5D=39.6&factor%5Bppw_p%5D=390.0&x25x=true&factor%5Bx25x_hr%5D=13.8&factor%5Bx25x_p%5D=390.0&mtp=true&factor%5Bmtp_hr%5D=7.5&factor%5Bmtp_p%5D=390.0&lrev3=true&factor%5Blrev3_hr%5D=154.5&factor%5Blrev3_p%5D=390.0&factor%5Bcost%5D=0.0&sort=Profitability24&volume=0&revenue=24h&factor%5Bexchanges%5D%5B%5D=&factor%5Bexchanges%5D%5B%5D=binance&factor%5Bexchanges%5D%5B%5D=bitfinex&factor%5Bexchanges%5D%5B%5D=bitforex&factor%5Bexchanges%5D%5B%5D=bittrex&factor%5Bexchanges%5D%5B%5D=dove&factor%5Bexchanges%5D%5B%5D=exmo&factor%5Bexchanges%5D%5B%5D=gate&factor%5Bexchanges%5D%5B%5D=graviex&factor%5Bexchanges%5D%5B%5D=hitbtc&factor%5Bexchanges%5D%5B%5D=hotbit&factor%5Bexchanges%5D%5B%5D=ogre&factor%5Bexchanges%5D%5B%5D=poloniex&factor%5Bexchanges%5D%5B%5D=stex&dataset=Main&commit=Calculate