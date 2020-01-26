import requests
import json
import os

# Manual Calucation of inputed hashrate by user
def cals(ethash, zhash, cnheavy, cngpu, cryptonightR, cnfast, aion, cuckoocycle, cuckaroo29, cuckaroom29, cuckatoo31, beam, randomx, neoscrypt, timetravel10, x16rv2, phi2, equihashzero, zelhash, progpow, x25x, mtp, lyra2rev3):
    url = f'https://whattomine.com/coins.json?utf8=%E2%9C%93&eth=true&factor%5B+ethash={ethash}&zh=true&factor%5Bzh_hr%5D={zhash}&cnh=true&factor%5Bcnh_hr%5D={cnheavy}&cng=true&factor%5Bcng_hr%5D={cngpu}&cnr=true&factor%5Bcnr_hr%5D={cryptonightR}&cnf=true&factor%5Bcnf_hr%5D={cnfast}&eqa=true&factor%5Beqa_hr%5D={aion}&cc=true&factor%5Bcc_hr%5D={cuckoocycle}&cr29=true&factor%5Bcr29_hr%5D={cuckaroo29}&cm29=true&factor%5Bcm29_hr%5D={cuckaroom29}&ct31=true&factor%5Bct31_hr%5D={cuckatoo31}&eqb=true&factor%5Beqb_hr%5D={beam}&rmx=true&factor%5Brmx_hr%5D={randomx}&ns=true&factor%5Bns_hr%5D={neoscrypt}&tt10=true&factor%5Btt10_hr%5D={timetravel10}&x16r=true&factor%5Bx16r_hr%5D={x16rv2}&phi2=true&factor%5Bphi2_hr%5D={phi2}&eqz=true&factor%5Beqz_hr%5D={equihashzero}&zlh=true&factor%5Bzlh_hr%5D={zelhash}&ppw=true&factor%5Bppw_hr%5D={progpow}&x25x=true&factor%5Bx25x_hr%5D={x25x}&mtp=true&factor%5Bmtp_hr%5D={mtp}&lrev3=true&factor%5Blrev3_hr%5D={lyra2rev3}&factor%5Bcost%5D=0.0&sort=Profitability24&volume=0&revenue=24h&factor%5Bexchanges%5D%5B%5D=&factor%5Bexchanges%5D%5B%5D=binance&factor%5Bexchanges%5D%5B%5D=bitfinex&factor%5Bexchanges%5D%5B%5D=bitforex&factor%5Bexchanges%5D%5B%5D=bittrex&factor%5Bexchanges%5D%5B%5D=dove&factor%5Bexchanges%5D%5B%5D=exmo&factor%5Bexchanges%5D%5B%5D=gate&factor%5Bexchanges%5D%5B%5D=graviex&factor%5Bexchanges%5D%5B%5D=hitbtc&factor%5Bexchanges%5D%5B%5D=hotbit&factor%5Bexchanges%5D%5B%5D=ogre&factor%5Bexchanges%5D%5B%5D=poloniex&factor%5Bexchanges%5D%5B%5D=stex&dataset=Main&commit=Calculate'
    re = requests.get(url)
    pkg_json = re.json()
    coin = pkg_json['coins']['Zcoin']['btc_revenue24']
    print('zcoin 24 ', coin)
    coin2 = pkg_json['coins']['Ethereum']['btc_revenue24']
    print('eth 24 ', coin2)

    #getting 24 hour revenue of each coin
    coinNameDict= dict()
    for i in pkg_json['coins']:
        coinNameDict[i] = float(pkg_json['coins'][i]['btc_revenue24'])
        sorted(coinNameDict.values())
        print(coinNameDict)
        with open('coinRevenueManualMode.json', 'w') as f:
             json.dump(coinNameDict, f , indent=2)

    if coin > coin2:
        koin = coin
        print('zcoin is valuable with ', koin)
    else:
        koin = coin2
        print('eth is valuable wiht ', koin)

    return koin

# Autmatically Calculation of number of available  AMD gpu
def autoCalAMD(aGpu, numGpu):
    a380 = aFury = a470 = a480 = a570 = a580 = aVega56 = aVega64 = aVII = '0'
    factorKeys = ["#factor_cnf_hr","#factor_cng_hr","#factor_cnh_hr","#factor_cnr_hr","#factor_cr29_hr","#factor_cm29_hr","#factor_ct31_hr","#factor_cc_hr","#factor_eqb_hr","#factor_eqa_hr","#factor_eqz_hr","#factor_eth_hr","#factor_lrev3_hr","#factor_mtp_hr","#factor_ns_hr","#factor_phi2_hr","#factor_ppw_hr","#factor_rmx_hr","#factor_tt10_hr","#factor_x16r_hr","#factor_x25x_hr","#factor_zlh_hr","#factor_zh_hr"]

    factors_380 = {"#factor_ppw_hr":4.8,"#factor_zlh_hr":10.0,"#factor_zh_hr":16.0,"#factor_cnh_hr":520.0,"#factor_ns_hr":580.0,"#factor_eqa_hr":75.0,"#factor_tt10_hr":6.5,"#factor_cng_hr":340.0,"#factor_eth_hr":19.0,"#factor_cnr_hr":530.0,"#factor_x16r_hr":3.9,"#factor_eqz_hr":10.5,"#factor_cnf_hr":930.0,"#factor_bcd_hr":4.9,"#factor_x25x_hr":0.45,"#factor_cc_hr":0.0,"#factor_cr29_hr":0.0,"#factor_cm29_hr":0.0,"#factor_ct31_hr":0.0,"#factor_eqb_hr":0.0,"#factor_rmx_hr":0.0,"#factor_phi2_hr":0.0,"#factor_lrev3_hr":0.0,"#factor_mtp_hr":0.0}

    factors_fury = {"#factor_ppw_hr":6.6,"#factor_zlh_hr":20.5,"#factor_zh_hr":32.0,"#factor_cnh_hr":400.0,"#factor_ns_hr":1250.0,"#factor_eqa_hr":140.0,"#factor_cng_hr":630.0,"#factor_eth_hr":29.0,"#factor_x16r_hr":13.0,"#factor_eqz_hr":23.0,"#factor_eqb_hr":21.5,"#factor_cnf_hr":900.0,"#factor_bcd_hr":8.2,"#factor_x25x_hr":1.1,"#factor_cc_hr":0.0,"#factor_cr29_hr":0.0,"#factor_cm29_hr":0.0,"#factor_ct31_hr":0.0,"#factor_rmx_hr":0.0,"#factor_phi2_hr":0.0,"#factor_lrev3_hr":0.0,"#factor_mtp_hr":0.0,"#factor_tt10_hr":0.0,"#factor_cnr_hr":0.0}

    factors_470 = {"#factor_ppw_hr":6.4,"#factor_zlh_hr":12.0,"#factor_zh_hr":18.0,"#factor_cnh_hr":590.0,"#factor_ns_hr":680.0,"#factor_eqa_hr":80.0,"#factor_tt10_hr":11.0,"#factor_cng_hr":600.0,"#factor_eth_hr":26.0,"#factor_cnr_hr":660.0,"#factor_x16r_hr":9.5,"#factor_ct31_hr":0.2,"#factor_eqz_hr":12.4,"#factor_eqb_hr":12.5,"#factor_cnf_hr":1150.0,"#factor_bcd_hr":8.2,"#factor_x25x_hr":0.65,"#factor_lrev3_hr":32.0,"#factor_rmx_hr":340.0,"#factor_cc_hr":0.0,"#factor_cr29_hr":0.0,"#factor_cm29_hr":0.0,"#factor_phi2_hr":0.0,"#factor_mtp_hr":0.0}

    factors_480 = {"#factor_ppw_hr":7.9,"#factor_zlh_hr":14.0,"#factor_zh_hr":21.0,"#factor_cnh_hr":960.0,"#factor_ns_hr":820.0,"#factor_eqa_hr":95.0,"#factor_tt10_hr":13.5,"#factor_cng_hr":760.0,"#factor_eth_hr":29.5,"#factor_cnr_hr":830.0,"#factor_x16r_hr":11.5,"#factor_xn_hr":1.6,"#factor_eqz_hr":14.0,"#factor_eqb_hr":14.5,"#factor_cnf_hr":1650.0,"#factor_bcd_hr":10.1,"#factor_x25x_hr":0.83,"#factor_mtp_hr":0.6,"#factor_cr29_hr":2.2,"#factor_lrev3_hr":39.0,"#factor_ct31_hr":0.5,"#factor_rmx_hr":470.0,"#factor_cm29_hr":2.2,"#factor_cc_hr":0.0,"#factor_phi2_hr":0.0}

    factors_570 = {"#factor_ppw_hr":6.7,"#factor_zlh_hr":12.5,"#factor_zh_hr":19.0,"#factor_cnh_hr":640.0,"#factor_ns_hr":700.0,"#factor_eqa_hr":85.0,"#factor_tt10_hr":11.5,"#factor_cng_hr":640.0,"#factor_eth_hr":27.9,"#factor_cnr_hr":730.0,"#factor_x16r_hr":10.0,"#factor_ct31_hr":0.2,"#factor_eqz_hr":12.8,"#factor_eqb_hr":13.0,"#factor_cnf_hr":1250.0,"#factor_bcd_hr":8.6,"#factor_x25x_hr":0.7,"#factor_lrev3_hr":33.5,"#factor_rmx_hr":390.0,"#factor_cc_hr":0.0,"#factor_cr29_hr":0.0,"#factor_cm29_hr":0.0,"#factor_phi2_hr":0.0,"#factor_mtp_hr":0.0}

    factors_580 = {"#factor_ppw_hr":7.9,"#factor_zlh_hr":14.0,"#factor_zh_hr":21.0,"#factor_cnh_hr":960.0,"#factor_ns_hr":820.0,"#factor_eqa_hr":95.0,"#factor_tt10_hr":13.5,"#factor_cng_hr":760.0,"#factor_eth_hr":30.2,"#factor_cnr_hr":830.0,"#factor_x16r_hr":11.5,"#factor_xn_hr":1.6,"#factor_eqz_hr":14.0,"#factor_eqb_hr":14.5,"#factor_cnf_hr":1650.0,"#factor_bcd_hr":10.1,"#factor_x25x_hr":0.83,"#factor_mtp_hr":0.6,"#factor_cr29_hr":2.2,"#factor_lrev3_hr":39.0,"#factor_ct31_hr":0.5,"#factor_rmx_hr":470.0,"#factor_cm29_hr":2.2,"#factor_phi2_hr":0.0,"#factor_cc_hr":0.0}

    factors_vega56 = {"#factor_ppw_hr":15.5,"#factor_zlh_hr":18.0,"#factor_zh_hr":34.0,"#factor_cnh_hr":1380.0,"#factor_ns_hr":1600.0,"#factor_eqa_hr":130.0,"#factor_tt10_hr":17.2,"#factor_cng_hr":1300.0,"#factor_eth_hr":36.5,"#factor_cnr_hr":1720.0,"#factor_x16r_hr":16.0,"#factor_eqz_hr":24.1,"#factor_eqb_hr":17.0,"#factor_cnf_hr":3600.0,"#factor_bcd_hr":11.9,"#factor_x25x_hr":1.8,"#factor_cr29_hr":3.7,"#factor_lrev3_hr":51.0,"#factor_ct31_hr":0.95,"#factor_rmx_hr":1040.0,"#factor_cm29_hr":3.9,"#factor_phi2_hr":0.0,"#factor_cc_hr":0.0,"#factor_mtp_hr":0.0}

    factors_vega64 = {"#factor_ppw_hr":17.0,"#factor_zlh_hr":19.0,"#factor_zh_hr":38.0,"#factor_cnh_hr":1500.0,"#factor_ns_hr":2000.0,"#factor_eqa_hr":145.0,"#factor_tt10_hr":20.5,"#factor_cng_hr":1650.0,"#factor_eth_hr":40.0,"#factor_cnr_hr":1800.0,"#factor_x16r_hr":18.0,"#factor_eqz_hr":25.5,"#factor_eqb_hr":17.5,"#factor_cnf_hr":3700.0,"#factor_bcd_hr":14.6,"#factor_x25x_hr":2.1,"#factor_cr29_hr":3.9,"#factor_lrev3_hr":59.0,"#factor_ct31_hr":1.15,"#factor_rmx_hr":1160.0,"#factor_cm29_hr":4.3,"#factor_phi2_hr":0.0,"#factor_cc_hr":0.0,"#factor_mtp_hr":0.0}

    factors_vii = {"#factor_ppw_hr":24.6,"#factor_zlh_hr":33.5,"#factor_zh_hr":49.0,"#factor_cnh_hr":2200.0,"#factor_ns_hr":2150.0,"#factor_eqa_hr":160.0,"#factor_tt10_hr":30.0,"#factor_cng_hr":2000.0,"#factor_eth_hr":78.0,"#factor_cnr_hr":2800.0,"#factor_x16r_hr":23.0,"#factor_eqz_hr":29.5,"#factor_eqb_hr":29.5,"#factor_cnf_hr":5200.0,"#factor_bcd_hr":23.0,"#factor_x25x_hr":2.45,"#factor_cr29_hr":4.7,"#factor_lrev3_hr":90.0,"#factor_cc_hr":5.0,"#factor_ct31_hr":1.6,"#factor_rmx_hr":1400.0,"#factor_cm29_hr":5.9,"#factor_mtp_hr":0.0,"#factor_phi2_hr":0.0}


    autoDict = dict()
   
    for factorkey in factorKeys:
        if aGpu == '380':
            a380 = float(numGpu)
            value_380 = a380 * factors_380[factorkey]
            autoDict[factorkey] = float(value_380)
            print(autoDict)
            with open('380AMDRevenueAutoMode.json', 'w') as f:
                 json.dump(autoDict, f, indent=2)
        elif aGpu == 'Fury':
            aFury = float(numGpu)
            value_Fury = aFury * factors_fury[factorkey]
            autoDict[factorkey] = value_Fury
            with open('FuryAMDRevenueAutoMode.json', 'w') as f:
                json.dump(autoDict, f, indent=2)
            print(value_Fury)
        elif aGpu == '470':
            a470 = float(numGpu)
            value_470 = a470 * factors_470[factorkey]
            autoDict[factorkey] = value_470
            with open('470AMDRevenueAutoMode.json', 'w') as f:
                json.dump(autoDict, f, indent=2)
            print(value_470)
        elif aGpu == '480':
            a480 = float(numGpu)
            value_480 = a480 * factors_480[factorkey]
            autoDict[factorkey] = value_480
            with open('480AMDRevenueAutoMode.json', 'w') as f:
                json.dump(autoDict, f, indent=2)
            print(value_380)
        elif aGpu == '570':
            a570 = float(numGpu)
            value_570 = a570 * factors_570[factorkey]
            autoDict[factorkey] = value_570
            with open('570AMDRevenueAutoMode.json', 'w') as f:
                json.dump(autoDict, f, indent=2)
            print(value_570)
        elif aGpu == '580':
            a580 = float(numGpu)
            value_580 = a580 * factors_580[factorkey]
            autoDict[factorkey] = value_580
            with open('580AMDRevenueAutoMode.json', 'w') as f:
                json.dump(autoDict, f, indent=2)
            print(value_580)
        elif aGpu == 'Vega56':
            aVega56 = float(numGpu)
            value_vega56 = aVega56 * factors_vega56[factorkey]
            autoDict[factorkey] = value_vega56
            with open('Vega56AMDRevenueAutoMode.json', 'w') as f:
                json.dump(autoDict, f, indent=2)
            print(value_vega56)
        elif aGpu == 'Vega64':
            aVega64 = float(numGpu)
            value_vega64 = aVega64 * factors_vega64[factorkey]
            autoDict[factorkey] = value_vega64
            with open('Vega64AMDRevenueAutoMode.json', 'w') as f:
                json.dump(autoDict, f, indent=2)
            print(value_vega64)
        elif aGpu == 'VII':
            aVII = float(numGpu)
            value_vii = aVII * factors_vii[factorkey]
            autoDict[factorkey] = value_vii
            with open('VIIAMDRevenueAutoMode.json', 'w') as f:
                json.dump(autoDict, f, indent=2)
            print(value_vii)
    
    
    # url = f'https://whattomine.com/coins.json?utf8=%E2%9C%93&adapt_q_380={a380}&adapt_q_fury=0&adapt_q_470={a470}&adapt_q_480={a480}&adapt_q_570={a570}&adapt_q_580={a580}&adapt_q_vega56={aVega56}&adapt_q_vega64={aVega64}&adapt_q_5700xt=5700xt&adapt_q_vii={aVII}&eth=true&factor%5Beth_hr%5D=96.0&factor%5Beth_p%5D=390.0&zh=true&factor%5Bzh_hr%5D=177.0&factor%5Bzh_p%5D=390.0&cnh=true&factor%5Bcnh_hr%5D=2520.0&factor%5Bcnh_p%5D=330.0&cng=true&factor%5Bcng_hr%5D=4500.0&factor%5Bcng_p%5D=390.0&cnr=true&factor%5Bcnr_hr%5D=1500.0&factor%5Bcnr_p%5D=360.0&cnf=true&factor%5Bcnf_hr%5D=4260.0&factor%5Bcnf_p%5D=330.0&eqa=true&factor%5Beqa_hr%5D=615.0&factor%5Beqa_p%5D=390.0&cc=true&factor%5Bcc_hr%5D=15.3&factor%5Bcc_p%5D=390.0&cr29=true&factor%5Bcr29_hr%5D=18.0&factor%5Bcr29_p%5D=390.0&cm29=true&factor%5Bcm29_hr%5D=6.6&factor%5Bcm29_p%5D=390.0&ct31=true&factor%5Bct31_hr%5D=0.0&factor%5Bct31_p%5D=0.0&eqb=true&factor%5Beqb_hr%5D=129.0&factor%5Beqb_p%5D=390.0&rmx=true&factor%5Brmx_hr%5D=1920.0&factor%5Brmx_p%5D=360.0&ns=true&factor%5Bns_hr%5D=3900.0&factor%5Bns_p%5D=390.0&tt10=true&factor%5Btt10_hr%5D=93.0&factor%5Btt10_p%5D=390.0&x16r=true&factor%5Bx16r_hr%5D=70.0&factor%5Bx16r_p%5D=390.0&phi2=true&factor%5Bphi2_hr%5D=19.5&factor%5Bphi2_p%5D=390.0&eqz=true&factor%5Beqz_hr%5D=98.4&factor%5Beqz_p%5D=390.0&zlh=true&factor%5Bzlh_hr%5D=108.0&factor%5Bzlh_p%5D=390.0&ppw=true&factor%5Bppw_hr%5D=39.6&factor%5Bppw_p%5D=390.0&x25x=true&factor%5Bx25x_hr%5D=13.8&factor%5Bx25x_p%5D=390.0&mtp=true&factor%5Bmtp_hr%5D=7.5&factor%5Bmtp_p%5D=390.0&lrev3=true&factor%5Blrev3_hr%5D=154.5&factor%5Blrev3_p%5D=390.0&factor%5Bcost%5D=0.0&sort=Profitability24&volume=0&revenue=24h&factor%5Bexchanges%5D%5B%5D=&factor%5Bexchanges%5D%5B%5D=binance&factor%5Bexchanges%5D%5B%5D=bitfinex&factor%5Bexchanges%5D%5B%5D=bitforex&factor%5Bexchanges%5D%5B%5D=bittrex&factor%5Bexchanges%5D%5B%5D=dove&factor%5Bexchanges%5D%5B%5D=exmo&factor%5Bexchanges%5D%5B%5D=gate&factor%5Bexchanges%5D%5B%5D=graviex&factor%5Bexchanges%5D%5B%5D=hitbtc&factor%5Bexchanges%5D%5B%5D=hotbit&factor%5Bexchanges%5D%5B%5D=ogre&factor%5Bexchanges%5D%5B%5D=poloniex&factor%5Bexchanges%5D%5B%5D=stex&dataset=Main&commit=Calculate'

    url = f'https://whattomine.com/coins.json?utf8=%E2%9C%93&adapt_q_380={a380}&adapt_q_fury={aFury}&adapt_q_470={a470}&adapt_q_480={a480}&adapt_q_570={a570}&adapt_q_580={a580}&adapt_q_vega56={aVega56}&adapt_q_vega64={aVega64}&adapt_q_5700xt=5700xt&adapt_q_vii={aVII}&eth=true&factor%5Beth_hr%5D={autoDict["#factor_eth_hr"]}&factor%5Beth_p%5D=390.0&zh=true&factor%5Bzh_hr%5D={autoDict["#factor_zh_hr"]}&factor%5Bzh_p%5D=390.0&cnh=true&factor%5Bcnh_hr%5D={autoDict["#factor_cnh_hr"]}&factor%5Bcnh_p%5D=330.0&cng=true&factor%5Bcng_hr%5D={autoDict["#factor_cng_hr"]}&factor%5Bcng_p%5D=390.0&cnr=true&factor%5Bcnr_hr%5D={autoDict["#factor_cnr_hr"]}&factor%5Bcnr_p%5D=360.0&cnf=true&factor%5Bcnf_hr%5D={autoDict["#factor_cnf_hr"]}&factor%5Bcnf_p%5D=330.0&eqa=true&factor%5Beqa_hr%5D={autoDict["#factor_eqa_hr"]}&factor%5Beqa_p%5D=390.0&cc=true&factor%5Bcc_hr%5D={autoDict["#factor_cc_hr"]}&factor%5Bcc_p%5D=390.0&cr29=true&factor%5Bcr29_hr%5D={autoDict["#factor_cr29_hr"]}&factor%5Bcr29_p%5D=390.0&cm29=true&factor%5Bcm29_hr%5D={autoDict["#factor_cm29_hr"]}&factor%5Bcm29_p%5D=390.0&ct31=true&factor%5Bct31_hr%5D={autoDict["#factor_ct31_hr"]}&factor%5Bct31_p%5D=0.0&eqb=true&factor%5Beqb_hr%5D={autoDict["#factor_eqb_hr"]}&factor%5Beqb_p%5D=390.0&rmx=true&factor%5Brmx_hr%5D={autoDict["#factor_rmx_hr"]}&factor%5Brmx_p%5D=360.0&ns=true&factor%5Bns_hr%5D={autoDict["#factor_ns_hr"]}&factor%5Bns_p%5D=390.0&tt10=true&factor%5Btt10_hr%5D={autoDict["#factor_tt10_hr"]}&factor%5Btt10_p%5D=390.0&x16r=true&factor%5Bx16r_hr%5D={autoDict["#factor_x16r_hr"]}&factor%5Bx16r_p%5D=390.0&phi2=true&factor%5Bphi2_hr%5D={autoDict["#factor_phi2_hr"]}&factor%5Bphi2_p%5D=390.0&eqz=true&factor%5Beqz_hr%5D={autoDict["#factor_eqz_hr"]}&factor%5Beqz_p%5D=390.0&zlh=true&factor%5Bzlh_hr%5D={autoDict["#factor_zlh_hr"]}&factor%5Bzlh_p%5D=390.0&ppw=true&factor%5Bppw_hr%5D={autoDict["#factor_ppw_hr"]}&factor%5Bppw_p%5D=390.0&x25x=true&factor%5Bx25x_hr%5D={autoDict["#factor_x25x_hr"]}&factor%5Bx25x_p%5D=390.0&mtp=true&factor%5Bmtp_hr%5D={autoDict["#factor_mtp_hr"]}&factor%5Bmtp_p%5D=390.0&lrev3=true&factor%5Blrev3_hr%5D={autoDict["#factor_lrev3_hr"]}&factor%5Blrev3_p%5D=390.0&factor%5Bcost%5D=0.0&sort=Profitability24&volume=0&revenue=24h&factor%5Bexchanges%5D%5B%5D=&factor%5Bexchanges%5D%5B%5D=binance&factor%5Bexchanges%5D%5B%5D=bitfinex&factor%5Bexchanges%5D%5B%5D=bitforex&factor%5Bexchanges%5D%5B%5D=bittrex&factor%5Bexchanges%5D%5B%5D=dove&factor%5Bexchanges%5D%5B%5D=exmo&factor%5Bexchanges%5D%5B%5D=gate&factor%5Bexchanges%5D%5B%5D=graviex&factor%5Bexchanges%5D%5B%5D=hitbtc&factor%5Bexchanges%5D%5B%5D=hotbit&factor%5Bexchanges%5D%5B%5D=ogre&factor%5Bexchanges%5D%5B%5D=poloniex&factor%5Bexchanges%5D%5B%5D=stex&dataset=Main&commit=Calculate'
    re = requests.get(url)
    pkg_json = re.json()

    coinNameDict= {}
    for i in pkg_json['coins']:
        coinNameDict[i] = float(pkg_json['coins'][i]['btc_revenue24'])
        sorted(coinNameDict.values())
        with open('coinRevenueAutoMode.json', 'w') as f:
             json.dump(coinNameDict, f , indent=2)
    coin = pkg_json['coins']['Zcoin']['btc_revenue24']
    return coin