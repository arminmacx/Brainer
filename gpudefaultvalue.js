$(function(){const updateQuantityIfZero=function(cardName){const fieldSelector="#adapt_q_"+cardName;const quantity=$(fieldSelector).val();if(quantity==="0"){return $(fieldSelector).val(1);}};const adaptUncheck=()=>$(".adapt").prop("checked",false);const factors_380={"#factor_ppw_hr":4.8,"#factor_ppw_p":150.0,"#factor_zlh_hr":10.0,"#factor_zlh_p":120.0,"#factor_zh_hr":16.0,"#factor_zh_p":120.0,"#factor_cnh_hr":520.0,"#factor_cnh_p":120.0,"#factor_ns_hr":580.0,"#factor_ns_p":140.0,"#factor_eqa_hr":75.0,"#factor_eqa_p":120.0,"#factor_tt10_hr":6.5,"#factor_tt10_p":130.0,"#factor_cng_hr":340.0,"#factor_cng_p":120.0,"#factor_eth_hr":19.0,"#factor_eth_p":140.0,"#factor_cnr_hr":530.0,"#factor_cnr_p":120.0,"#factor_x16r_hr":3.9,"#factor_x16r_p":130.0,"#factor_hx_hr":3.7,"#factor_hx_p":130.0,"#factor_eqz_hr":10.5,"#factor_eqz_p":120.0,"#factor_cnf_hr":930.0,"#factor_cnf_p":120.0,"#factor_bcd_hr":4.9,"#factor_bcd_p":130.0,"#factor_x25x_hr":0.45,"#factor_x25x_p":110.0,}
const factors_fury={"#factor_ppw_hr":6.6,"#factor_ppw_p":220.0,"#factor_zlh_hr":20.5,"#factor_zlh_p":240.0,"#factor_zh_hr":32.0,"#factor_zh_p":240.0,"#factor_cnh_hr":400.0,"#factor_cnh_p":120.0,"#factor_ns_hr":1250.0,"#factor_ns_p":270.0,"#factor_eqa_hr":140.0,"#factor_eqa_p":240.0,"#factor_cng_hr":630.0,"#factor_cng_p":150.0,"#factor_eth_hr":29.0,"#factor_eth_p":220.0,"#factor_x16r_hr":13.0,"#factor_x16r_p":270.0,"#factor_eqz_hr":23.0,"#factor_eqz_p":240.0,"#factor_eqb_hr":21.5,"#factor_eqb_p":220.0,"#factor_cnf_hr":900.0,"#factor_cnf_p":120.0,"#factor_bcd_hr":8.2,"#factor_bcd_p":230.0,"#factor_x25x_hr":1.1,"#factor_x25x_p":230.0,}
const factors_470={"#factor_ppw_hr":6.4,"#factor_ppw_p":130.0,"#factor_zlh_hr":12.0,"#factor_zlh_p":110.0,"#factor_zh_hr":18.0,"#factor_zh_p":110.0,"#factor_cnh_hr":590.0,"#factor_cnh_p":100.0,"#factor_ns_hr":680.0,"#factor_ns_p":140.0,"#factor_eqa_hr":80.0,"#factor_eqa_p":110.0,"#factor_tt10_hr":11.0,"#factor_tt10_p":120.0,"#factor_cng_hr":600.0,"#factor_cng_p":110.0,"#factor_eth_hr":26.0,"#factor_eth_p":120.0,"#factor_cnr_hr":660.0,"#factor_cnr_p":120.0,"#factor_x16r_hr":9.5,"#factor_x16r_p":130.0,"#factor_ct31_hr":0.2,"#factor_ct31_p":110.0,"#factor_hx_hr":6.3,"#factor_hx_p":120.0,"#factor_eqz_hr":12.4,"#factor_eqz_p":120.0,"#factor_eqb_hr":12.5,"#factor_eqb_p":105.0,"#factor_cnf_hr":1150.0,"#factor_cnf_p":100.0,"#factor_bcd_hr":8.2,"#factor_bcd_p":120.0,"#factor_x25x_hr":0.65,"#factor_x25x_p":75.0,"#factor_lrev3_hr":32.0,"#factor_lrev3_p":130.0,"#factor_rmx_hr":340.0,"#factor_rmx_p":80.0,}
const factors_480={"#factor_ppw_hr":7.9,"#factor_ppw_p":140.0,"#factor_zlh_hr":14.0,"#factor_zlh_p":120.0,"#factor_zh_hr":21.0,"#factor_zh_p":120.0,"#factor_cnh_hr":960.0,"#factor_cnh_p":110.0,"#factor_ns_hr":820.0,"#factor_ns_p":150.0,"#factor_eqa_hr":95.0,"#factor_eqa_p":120.0,"#factor_tt10_hr":13.5,"#factor_tt10_p":130.0,"#factor_cng_hr":760.0,"#factor_cng_p":120.0,"#factor_eth_hr":29.5,"#factor_eth_p":135.0,"#factor_cnr_hr":830.0,"#factor_cnr_p":130.0,"#factor_x16r_hr":11.5,"#factor_x16r_p":140.0,"#factor_xn_hr":1.6,"#factor_xn_p":120.0,"#factor_hx_hr":7.6,"#factor_hx_p":130.0,"#factor_eqz_hr":14.0,"#factor_eqz_p":130.0,"#factor_eqb_hr":14.5,"#factor_eqb_p":120.0,"#factor_cnf_hr":1650.0,"#factor_cnf_p":110.0,"#factor_bcd_hr":10.1,"#factor_bcd_p":130.0,"#factor_x25x_hr":0.83,"#factor_x25x_p":80.0,"#factor_mtp_hr":0.6,"#factor_mtp_p":130.0,"#factor_cr29_hr":2.2,"#factor_cr29_p":130.0,"#factor_lrev3_hr":39.0,"#factor_lrev3_p":140.0,"#factor_ct31_hr":0.5,"#factor_ct31_p":120.0,"#factor_rmx_hr":470.0,"#factor_rmx_p":100.0,"#factor_cm29_hr":2.2,"#factor_cm29_p":130.0,}
const factors_570={"#factor_ppw_hr":6.7,"#factor_ppw_p":130.0,"#factor_zlh_hr":12.5,"#factor_zlh_p":100.0,"#factor_zh_hr":19.0,"#factor_zh_p":100.0,"#factor_cnh_hr":640.0,"#factor_cnh_p":110.0,"#factor_ns_hr":700.0,"#factor_ns_p":140.0,"#factor_eqa_hr":85.0,"#factor_eqa_p":100.0,"#factor_tt10_hr":11.5,"#factor_tt10_p":110.0,"#factor_cng_hr":640.0,"#factor_cng_p":110.0,"#factor_eth_hr":27.9,"#factor_eth_p":120.0,"#factor_cnr_hr":730.0,"#factor_cnr_p":120.0,"#factor_x16r_hr":10.0,"#factor_x16r_p":120.0,"#factor_ct31_hr":0.2,"#factor_ct31_p":100.0,"#factor_hx_hr":6.6,"#factor_hx_p":110.0,"#factor_eqz_hr":12.8,"#factor_eqz_p":110.0,"#factor_eqb_hr":13.0,"#factor_eqb_p":110.0,"#factor_cnf_hr":1250.0,"#factor_cnf_p":110.0,"#factor_bcd_hr":8.6,"#factor_bcd_p":110.0,"#factor_x25x_hr":0.7,"#factor_x25x_p":75.0,"#factor_lrev3_hr":33.5,"#factor_lrev3_p":120.0,"#factor_rmx_hr":390.0,"#factor_rmx_p":80.0,}
const factors_580={"#factor_ppw_hr":7.9,"#factor_ppw_p":140.0,"#factor_zlh_hr":14.0,"#factor_zlh_p":110.0,"#factor_zh_hr":21.0,"#factor_zh_p":110.0,"#factor_cnh_hr":960.0,"#factor_cnh_p":115.0,"#factor_ns_hr":820.0,"#factor_ns_p":150.0,"#factor_eqa_hr":95.0,"#factor_eqa_p":110.0,"#factor_tt10_hr":13.5,"#factor_tt10_p":120.0,"#factor_cng_hr":760.0,"#factor_cng_p":120.0,"#factor_eth_hr":30.2,"#factor_eth_p":135.0,"#factor_cnr_hr":830.0,"#factor_cnr_p":130.0,"#factor_x16r_hr":11.5,"#factor_x16r_p":130.0,"#factor_xn_hr":1.6,"#factor_xn_p":120.0,"#factor_hx_hr":7.6,"#factor_hx_p":120.0,"#factor_eqz_hr":14.0,"#factor_eqz_p":120.0,"#factor_eqb_hr":14.5,"#factor_eqb_p":120.0,"#factor_cnf_hr":1650.0,"#factor_cnf_p":115.0,"#factor_bcd_hr":10.1,"#factor_bcd_p":120.0,"#factor_x25x_hr":0.83,"#factor_x25x_p":80.0,"#factor_mtp_hr":0.6,"#factor_mtp_p":120.0,"#factor_cr29_hr":2.2,"#factor_cr29_p":120.0,"#factor_lrev3_hr":39.0,"#factor_lrev3_p":130.0,"#factor_ct31_hr":0.5,"#factor_ct31_p":110.0,"#factor_rmx_hr":470.0,"#factor_rmx_p":90.0,"#factor_cm29_hr":2.2,"#factor_cm29_p":130.0,}
const factors_vega56={"#factor_ppw_hr":15.5,"#factor_ppw_p":250.0,"#factor_zlh_hr":18.0,"#factor_zlh_p":150.0,"#factor_zh_hr":34.0,"#factor_zh_p":230.0,"#factor_cnh_hr":1380.0,"#factor_cnh_p":200.0,"#factor_ns_hr":1600.0,"#factor_ns_p":230.0,"#factor_eqa_hr":130.0,"#factor_eqa_p":200.0,"#factor_tt10_hr":17.2,"#factor_tt10_p":230.0,"#factor_cng_hr":1300.0,"#factor_cng_p":250.0,"#factor_eth_hr":36.5,"#factor_eth_p":210.0,"#factor_cnr_hr":1720.0,"#factor_cnr_p":250.0,"#factor_x16r_hr":16.0,"#factor_x16r_p":230.0,"#factor_hx_hr":8.7,"#factor_hx_p":230.0,"#factor_eqz_hr":24.1,"#factor_eqz_p":230.0,"#factor_eqb_hr":17.0,"#factor_eqb_p":160.0,"#factor_cnf_hr":3600.0,"#factor_cnf_p":200.0,"#factor_bcd_hr":11.9,"#factor_bcd_p":230.0,"#factor_x25x_hr":1.8,"#factor_x25x_p":150.0,"#factor_cr29_hr":3.7,"#factor_cr29_p":230.0,"#factor_lrev3_hr":51.0,"#factor_lrev3_p":220.0,"#factor_ct31_hr":0.95,"#factor_ct31_p":230.0,"#factor_rmx_hr":1040.0,"#factor_rmx_p":150.0,"#factor_cm29_hr":3.9,"#factor_cm29_p":250.0,}
const factors_vega64={"#factor_ppw_hr":17.0,"#factor_ppw_p":270.0,"#factor_zlh_hr":19.0,"#factor_zlh_p":160.0,"#factor_zh_hr":38.0,"#factor_zh_p":250.0,"#factor_cnh_hr":1500.0,"#factor_cnh_p":220.0,"#factor_ns_hr":2000.0,"#factor_ns_p":250.0,"#factor_eqa_hr":145.0,"#factor_eqa_p":210.0,"#factor_tt10_hr":20.5,"#factor_tt10_p":250.0,"#factor_cng_hr":1650.0,"#factor_cng_p":270.0,"#factor_eth_hr":40.0,"#factor_eth_p":230.0,"#factor_cnr_hr":1800.0,"#factor_cnr_p":270.0,"#factor_x16r_hr":18.0,"#factor_x16r_p":250.0,"#factor_hx_hr":10.2,"#factor_hx_p":250.0,"#factor_eqz_hr":25.5,"#factor_eqz_p":250.0,"#factor_eqb_hr":17.5,"#factor_eqb_p":180.0,"#factor_cnf_hr":3700.0,"#factor_cnf_p":220.0,"#factor_bcd_hr":14.6,"#factor_bcd_p":250.0,"#factor_x25x_hr":2.1,"#factor_x25x_p":160.0,"#factor_cr29_hr":3.9,"#factor_cr29_p":250.0,"#factor_lrev3_hr":59.0,"#factor_lrev3_p":240.0,"#factor_ct31_hr":1.15,"#factor_ct31_p":250.0,"#factor_rmx_hr":1160.0,"#factor_rmx_p":160.0,"#factor_cm29_hr":4.3,"#factor_cm29_p":270.0,}
const factors_vii={"#factor_ppw_hr":24.6,"#factor_ppw_p":270.0,"#factor_zlh_hr":33.5,"#factor_zlh_p":200.0,"#factor_zh_hr":49.0,"#factor_zh_p":180.0,"#factor_cnh_hr":2200.0,"#factor_cnh_p":170.0,"#factor_ns_hr":2150.0,"#factor_ns_p":250.0,"#factor_eqa_hr":160.0,"#factor_eqa_p":160.0,"#factor_tt10_hr":30.0,"#factor_tt10_p":240.0,"#factor_cng_hr":2000.0,"#factor_cng_p":240.0,"#factor_eth_hr":78.0,"#factor_eth_p":230.0,"#factor_cnr_hr":2800.0,"#factor_cnr_p":240.0,"#factor_x16r_hr":23.0,"#factor_x16r_p":240.0,"#factor_hx_hr":19.0,"#factor_hx_p":240.0,"#factor_eqz_hr":29.5,"#factor_eqz_p":200.0,"#factor_eqb_hr":29.5,"#factor_eqb_p":190.0,"#factor_cnf_hr":5200.0,"#factor_cnf_p":230.0,"#factor_bcd_hr":23.0,"#factor_bcd_p":240.0,"#factor_x25x_hr":2.45,"#factor_x25x_p":140.0,"#factor_cr29_hr":4.7,"#factor_cr29_p":170.0,"#factor_lrev3_hr":90.0,"#factor_lrev3_p":240.0,"#factor_cc_hr":5.0,"#factor_cc_p":190.0,"#factor_ct31_hr":1.6,"#factor_ct31_p":200.0,"#factor_rmx_hr":1400.0,"#factor_rmx_p":170.0,"#factor_cm29_hr":5.9,"#factor_cm29_p":240.0,}
const factors_1050Ti={"#factor_ppw_hr":5.2,"#factor_ppw_p":75.0,"#factor_zlh_hr":12.5,"#factor_zlh_p":75.0,"#factor_zh_hr":19.0,"#factor_zh_p":75.0,"#factor_cnh_hr":390.0,"#factor_cnh_p":50.0,"#factor_ns_hr":500.0,"#factor_ns_p":75.0,"#factor_eqa_hr":80.0,"#factor_eqa_p":75.0,"#factor_phi2_hr":2.4,"#factor_phi2_p":75.0,"#factor_tt10_hr":11.5,"#factor_tt10_p":75.0,"#factor_cng_hr":520.0,"#factor_cng_p":70.0,"#factor_eth_hr":13.9,"#factor_eth_p":70.0,"#factor_x16r_hr":8.0,"#factor_x16r_p":75.0,"#factor_xn_hr":1.7,"#factor_xn_p":75.0,"#factor_hx_hr":6.0,"#factor_hx_p":75.0,"#factor_eqz_hr":11.8,"#factor_eqz_p":75.0,"#factor_eqb_hr":12.5,"#factor_eqb_p":75.0,"#factor_cnf_hr":640.0,"#factor_cnf_p":50.0,"#factor_bcd_hr":8.5,"#factor_bcd_p":75.0,"#factor_x25x_hr":1.65,"#factor_x25x_p":75.0,"#factor_lrev3_hr":18.8,"#factor_lrev3_p":75.0,"#factor_cc_hr":1.8,"#factor_cc_p":75.0,"#factor_cnr_hr":250.0,"#factor_cnr_p":60.0,"#factor_rmx_hr":200.0,"#factor_rmx_p":60.0,}
const factors_10606={"#factor_ppw_hr":7.3,"#factor_ppw_p":90.0,"#factor_zlh_hr":15.5,"#factor_zlh_p":90.0,"#factor_zh_hr":32.5,"#factor_zh_p":90.0,"#factor_cnh_hr":590.0,"#factor_cnh_p":70.0,"#factor_ns_hr":680.0,"#factor_ns_p":90.0,"#factor_eqa_hr":135.0,"#factor_eqa_p":90.0,"#factor_phi2_hr":4.2,"#factor_phi2_p":90.0,"#factor_tt10_hr":16.8,"#factor_tt10_p":90.0,"#factor_cng_hr":750.0,"#factor_cng_p":90.0,"#factor_eth_hr":22.5,"#factor_eth_p":90.0,"#factor_x16r_hr":9.4,"#factor_x16r_p":90.0,"#factor_xn_hr":2.3,"#factor_xn_p":90.0,"#factor_hx_hr":9.0,"#factor_hx_p":90.0,"#factor_eqz_hr":18.5,"#factor_eqz_p":90.0,"#factor_eqb_hr":20.5,"#factor_eqb_p":90.0,"#factor_cnf_hr":1000.0,"#factor_cnf_p":70.0,"#factor_bcd_hr":11.8,"#factor_bcd_p":90.0,"#factor_x25x_hr":2.4,"#factor_x25x_p":90.0,"#factor_mtp_hr":1.3,"#factor_mtp_p":90.0,"#factor_cr29_hr":3.8,"#factor_cr29_p":90.0,"#factor_lrev3_hr":26.5,"#factor_lrev3_p":90.0,"#factor_cc_hr":3.5,"#factor_cc_p":90.0,"#factor_cnr_hr":390.0,"#factor_cnr_p":80.0,"#factor_rmx_hr":350.0,"#factor_rmx_p":80.0,"#factor_cm29_hr":2.0,"#factor_cm29_p":90.0,}
const factors_1070={"#factor_ppw_hr":12.0,"#factor_ppw_p":130.0,"#factor_zlh_hr":33.5,"#factor_zlh_p":130.0,"#factor_zh_hr":56.0,"#factor_zh_p":130.0,"#factor_cnh_hr":820.0,"#factor_cnh_p":110.0,"#factor_ns_hr":1150.0,"#factor_ns_p":130.0,"#factor_eqa_hr":215.0,"#factor_eqa_p":130.0,"#factor_phi2_hr":5.7,"#factor_phi2_p":130.0,"#factor_tt10_hr":27.5,"#factor_tt10_p":130.0,"#factor_cng_hr":1300.0,"#factor_cng_p":130.0,"#factor_eth_hr":30.0,"#factor_eth_p":120.0,"#factor_x16r_hr":18.0,"#factor_x16r_p":130.0,"#factor_xn_hr":3.9,"#factor_xn_p":130.0,"#factor_hx_hr":14.0,"#factor_hx_p":130.0,"#factor_eqz_hr":32.5,"#factor_eqz_p":130.0,"#factor_eqb_hr":37.0,"#factor_eqb_p":130.0,"#factor_cnf_hr":1400.0,"#factor_cnf_p":110.0,"#factor_bcd_hr":19.9,"#factor_bcd_p":130.0,"#factor_x25x_hr":4.0,"#factor_x25x_p":130.0,"#factor_mtp_hr":2.2,"#factor_mtp_p":130.0,"#factor_cr29_hr":5.7,"#factor_cr29_p":130.0,"#factor_lrev3_hr":44.6,"#factor_lrev3_p":130.0,"#factor_cc_hr":5.1,"#factor_cc_p":130.0,"#factor_cnr_hr":600.0,"#factor_cnr_p":120.0,"#factor_rmx_hr":560.0,"#factor_rmx_p":120.0,"#factor_cm29_hr":3.0,"#factor_cm29_p":130.0,}
const factors_1070Ti={"#factor_ppw_hr":13.2,"#factor_ppw_p":130.0,"#factor_zlh_hr":36.0,"#factor_zlh_p":130.0,"#factor_zh_hr":59.0,"#factor_zh_p":130.0,"#factor_cnh_hr":840.0,"#factor_cnh_p":110.0,"#factor_ns_hr":1300.0,"#factor_ns_p":130.0,"#factor_eqa_hr":205.0,"#factor_eqa_p":130.0,"#factor_phi2_hr":6.5,"#factor_phi2_p":130.0,"#factor_tt10_hr":31.0,"#factor_tt10_p":130.0,"#factor_cng_hr":1500.0,"#factor_cng_p":130.0,"#factor_eth_hr":30.5,"#factor_eth_p":130.0,"#factor_x16r_hr":19.5,"#factor_x16r_p":130.0,"#factor_xn_hr":4.6,"#factor_xn_p":130.0,"#factor_hx_hr":15.0,"#factor_hx_p":130.0,"#factor_eqz_hr":32.8,"#factor_eqz_p":130.0,"#factor_eqb_hr":38.0,"#factor_eqb_p":130.0,"#factor_cnf_hr":1420.0,"#factor_cnf_p":110.0,"#factor_bcd_hr":22.5,"#factor_bcd_p":130.0,"#factor_x25x_hr":4.6,"#factor_x25x_p":130.0,"#factor_mtp_hr":2.5,"#factor_mtp_p":130.0,"#factor_cr29_hr":5.6,"#factor_cr29_p":130.0,"#factor_lrev3_hr":51.5,"#factor_lrev3_p":130.0,"#factor_cc_hr":5.1,"#factor_cc_p":130.0,"#factor_rmx_hr":640.0,"#factor_rmx_p":120.0,"#factor_cnr_hr":500.0,"#factor_cnr_p":120.0,"#factor_cm29_hr":3.1,"#factor_cm29_p":130.0,}
const factors_1080={"#factor_ppw_hr":15.0,"#factor_ppw_p":160.0,"#factor_zlh_hr":41.5,"#factor_zlh_p":160.0,"#factor_zh_hr":67.0,"#factor_zh_p":160.0,"#factor_cnh_hr":730.0,"#factor_cnh_p":110.0,"#factor_ns_hr":1500.0,"#factor_ns_p":150.0,"#factor_eqa_hr":240.0,"#factor_eqa_p":150.0,"#factor_phi2_hr":6.9,"#factor_phi2_p":160.0,"#factor_tt10_hr":37.0,"#factor_tt10_p":150.0,"#factor_cng_hr":1700.0,"#factor_cng_p":150.0,"#factor_eth_hr":34.0,"#factor_eth_p":150.0,"#factor_x16r_hr":23.0,"#factor_x16r_p":150.0,"#factor_xn_hr":5.1,"#factor_xn_p":150.0,"#factor_hx_hr":16.0,"#factor_hx_p":160.0,"#factor_eqz_hr":38.3,"#factor_eqz_p":150.0,"#factor_eqb_hr":43.0,"#factor_eqb_p":150.0,"#factor_cnf_hr":1180.0,"#factor_cnf_p":110.0,"#factor_bcd_hr":26.0,"#factor_bcd_p":150.0,"#factor_x25x_hr":5.25,"#factor_x25x_p":150.0,"#factor_mtp_hr":2.8,"#factor_mtp_p":150.0,"#factor_cr29_hr":6.5,"#factor_cr29_p":150.0,"#factor_lrev3_hr":58.5,"#factor_lrev3_p":150.0,"#factor_cc_hr":5.8,"#factor_cc_p":150.0,"#factor_cnr_hr":520.0,"#factor_cnr_p":120.0,"#factor_rmx_hr":700.0,"#factor_rmx_p":120.0,"#factor_cm29_hr":3.4,"#factor_cm29_p":150.0,}
const factors_1080Ti={"#factor_ppw_hr":18.2,"#factor_ppw_p":200.0,"#factor_zlh_hr":50.5,"#factor_zlh_p":200.0,"#factor_zh_hr":86.0,"#factor_zh_p":200.0,"#factor_cnh_hr":1060.0,"#factor_cnh_p":150.0,"#factor_ns_hr":1900.0,"#factor_ns_p":190.0,"#factor_eqa_hr":340.0,"#factor_eqa_p":200.0,"#factor_phi2_hr":9.2,"#factor_phi2_p":200.0,"#factor_tt10_hr":49.5,"#factor_tt10_p":200.0,"#factor_cng_hr":2300.0,"#factor_cng_p":190.0,"#factor_eth_hr":49.5,"#factor_eth_p":190.0,"#factor_x16r_hr":31.0,"#factor_x16r_p":190.0,"#factor_ct31_hr":1.45,"#factor_ct31_p":190.0,"#factor_xn_hr":6.9,"#factor_xn_p":190.0,"#factor_hx_hr":21.0,"#factor_hx_p":200.0,"#factor_eqz_hr":49.0,"#factor_eqz_p":190.0,"#factor_eqb_hr":53.5,"#factor_eqb_p":190.0,"#factor_cnf_hr":1730.0,"#factor_cnf_p":150.0,"#factor_bcd_hr":35.0,"#factor_bcd_p":190.0,"#factor_x25x_hr":6.9,"#factor_x25x_p":190.0,"#factor_mtp_hr":3.6,"#factor_mtp_p":190.0,"#factor_cr29_hr":8.7,"#factor_cr29_p":190.0,"#factor_lrev3_hr":77.0,"#factor_lrev3_p":190.0,"#factor_cc_hr":7.7,"#factor_cc_p":190.0,"#factor_cnr_hr":750.0,"#factor_cnr_p":160.0,"#factor_rmx_hr":1030.0,"#factor_rmx_p":160.0,"#factor_cm29_hr":4.7,"#factor_cm29_p":190.0,}
const factors_1660={"#factor_ppw_hr":9.8,"#factor_ppw_p":90.0,"#factor_zlh_hr":24.5,"#factor_zlh_p":90.0,"#factor_zh_hr":37.0,"#factor_zh_p":90.0,"#factor_cnh_hr":700.0,"#factor_cnh_p":90.0,"#factor_ns_hr":550.0,"#factor_ns_p":90.0,"#factor_eqa_hr":150.0,"#factor_eqa_p":100.0,"#factor_phi2_hr":5.6,"#factor_phi2_p":90.0,"#factor_tt10_hr":26.0,"#factor_tt10_p":90.0,"#factor_cng_hr":1250.0,"#factor_cng_p":90.0,"#factor_eth_hr":20.5,"#factor_eth_p":90.0,"#factor_cnr_hr":520.0,"#factor_cnr_p":90.0,"#factor_x16r_hr":17.0,"#factor_x16r_p":90.0,"#factor_xn_hr":3.8,"#factor_xn_p":90.0,"#factor_hx_hr":13.0,"#factor_hx_p":90.0,"#factor_eqz_hr":22.9,"#factor_eqz_p":90.0,"#factor_eqb_hr":25.5,"#factor_eqb_p":90.0,"#factor_cnf_hr":1100.0,"#factor_cnf_p":90.0,"#factor_bcd_hr":18.5,"#factor_bcd_p":90.0,"#factor_x25x_hr":3.1,"#factor_x25x_p":90.0,"#factor_mtp_hr":2.0,"#factor_mtp_p":100.0,"#factor_cr29_hr":4.4,"#factor_cr29_p":90.0,"#factor_lrev3_hr":42.0,"#factor_lrev3_p":90.0,"#factor_cc_hr":3.8,"#factor_cc_p":90.0,"#factor_rmx_hr":530.0,"#factor_rmx_p":90.0,"#factor_cm29_hr":2.2,"#factor_cm29_p":90.0,}
const factors_1660Ti={"#factor_ppw_hr":9.8,"#factor_ppw_p":90.0,"#factor_zlh_hr":24.7,"#factor_zlh_p":90.0,"#factor_zh_hr":39.0,"#factor_zh_p":90.0,"#factor_cnh_hr":650.0,"#factor_cnh_p":90.0,"#factor_ns_hr":1050.0,"#factor_ns_p":90.0,"#factor_eqa_hr":160.0,"#factor_eqa_p":100.0,"#factor_phi2_hr":5.6,"#factor_phi2_p":90.0,"#factor_tt10_hr":26.5,"#factor_tt10_p":90.0,"#factor_cng_hr":1300.0,"#factor_cng_p":90.0,"#factor_eth_hr":25.7,"#factor_eth_p":90.0,"#factor_cnr_hr":500.0,"#factor_cnr_p":90.0,"#factor_x16r_hr":17.2,"#factor_x16r_p":90.0,"#factor_xn_hr":4.0,"#factor_xn_p":90.0,"#factor_hx_hr":13.0,"#factor_hx_p":90.0,"#factor_eqz_hr":22.8,"#factor_eqz_p":90.0,"#factor_eqb_hr":25.5,"#factor_eqb_p":90.0,"#factor_cnf_hr":1100.0,"#factor_cnf_p":90.0,"#factor_bcd_hr":18.9,"#factor_bcd_p":90.0,"#factor_x25x_hr":3.3,"#factor_x25x_p":90.0,"#factor_mtp_hr":2.0,"#factor_mtp_p":100.0,"#factor_cr29_hr":5.1,"#factor_cr29_p":90.0,"#factor_lrev3_hr":43.5,"#factor_lrev3_p":90.0,"#factor_cc_hr":4.5,"#factor_cc_p":90.0,"#factor_rmx_hr":580.0,"#factor_rmx_p":90.0,"#factor_cm29_hr":2.5,"#factor_cm29_p":90.0,}
const factors_2060={"#factor_ppw_hr":15.7,"#factor_ppw_p":130.0,"#factor_zlh_hr":39.0,"#factor_zlh_p":130.0,"#factor_zh_hr":57.0,"#factor_zh_p":130.0,"#factor_cnh_hr":730.0,"#factor_cnh_p":100.0,"#factor_ns_hr":1300.0,"#factor_ns_p":130.0,"#factor_eqa_hr":220.0,"#factor_eqa_p":130.0,"#factor_phi2_hr":7.5,"#factor_phi2_p":130.0,"#factor_tt10_hr":34.0,"#factor_tt10_p":130.0,"#factor_cng_hr":1600.0,"#factor_cng_p":130.0,"#factor_eth_hr":27.6,"#factor_eth_p":130.0,"#factor_cnr_hr":530.0,"#factor_cnr_p":110.0,"#factor_x16r_hr":22.0,"#factor_x16r_p":130.0,"#factor_xn_hr":5.0,"#factor_xn_p":130.0,"#factor_hx_hr":17.1,"#factor_hx_p":130.0,"#factor_eqz_hr":31.6,"#factor_eqz_p":130.0,"#factor_eqb_hr":37.0,"#factor_eqb_p":130.0,"#factor_cnf_hr":1220.0,"#factor_cnf_p":100.0,"#factor_bcd_hr":24.2,"#factor_bcd_p":130.0,"#factor_x25x_hr":4.2,"#factor_x25x_p":130.0,"#factor_mtp_hr":2.6,"#factor_mtp_p":130.0,"#factor_cr29_hr":6.7,"#factor_cr29_p":130.0,"#factor_lrev3_hr":54.0,"#factor_lrev3_p":130.0,"#factor_cc_hr":6.0,"#factor_cc_p":130.0,"#factor_rmx_hr":600.0,"#factor_rmx_p":110.0,"#factor_cm29_hr":3.5,"#factor_cm29_p":130.0,}
const factors_2070={"#factor_ppw_hr":19.1,"#factor_ppw_p":150.0,"#factor_zlh_hr":46.0,"#factor_zlh_p":150.0,"#factor_zh_hr":62.0,"#factor_zh_p":150.0,"#factor_cnh_hr":970.0,"#factor_cnh_p":120.0,"#factor_ns_hr":1700.0,"#factor_ns_p":150.0,"#factor_eqa_hr":250.0,"#factor_eqa_p":150.0,"#factor_phi2_hr":8.6,"#factor_phi2_p":150.0,"#factor_tt10_hr":38.5,"#factor_tt10_p":150.0,"#factor_cng_hr":1850.0,"#factor_cng_p":150.0,"#factor_eth_hr":36.9,"#factor_eth_p":150.0,"#factor_cnr_hr":700.0,"#factor_cnr_p":140.0,"#factor_x16r_hr":24.5,"#factor_x16r_p":150.0,"#factor_xn_hr":5.5,"#factor_xn_p":150.0,"#factor_hx_hr":19.5,"#factor_hx_p":150.0,"#factor_eqz_hr":34.1,"#factor_eqz_p":150.0,"#factor_eqb_hr":47.0,"#factor_eqb_p":150.0,"#factor_cnf_hr":1620.0,"#factor_cnf_p":120.0,"#factor_bcd_hr":27.5,"#factor_bcd_p":150.0,"#factor_x25x_hr":4.8,"#factor_x25x_p":150.0,"#factor_mtp_hr":2.8,"#factor_mtp_p":150.0,"#factor_cr29_hr":7.7,"#factor_cr29_p":150.0,"#factor_lrev3_hr":60.5,"#factor_lrev3_p":150.0,"#factor_cc_hr":7.2,"#factor_cc_p":150.0,"#factor_rmx_hr":700.0,"#factor_rmx_p":140.0,"#factor_cm29_hr":4.1,"#factor_cm29_p":150.0,}
const factors_2080={"#factor_ppw_hr":24.8,"#factor_ppw_p":190.0,"#factor_zlh_hr":61.0,"#factor_zlh_p":190.0,"#factor_zh_hr":88.0,"#factor_zh_p":190.0,"#factor_cnh_hr":990.0,"#factor_cnh_p":130.0,"#factor_ns_hr":2350.0,"#factor_ns_p":190.0,"#factor_eqa_hr":335.0,"#factor_eqa_p":190.0,"#factor_phi2_hr":11.4,"#factor_phi2_p":190.0,"#factor_tt10_hr":50.0,"#factor_tt10_p":190.0,"#factor_cng_hr":2600.0,"#factor_cng_p":190.0,"#factor_eth_hr":36.9,"#factor_eth_p":190.0,"#factor_cnr_hr":720.0,"#factor_cnr_p":150.0,"#factor_x16r_hr":33.5,"#factor_x16r_p":190.0,"#factor_xn_hr":8.2,"#factor_xn_p":190.0,"#factor_hx_hr":25.0,"#factor_hx_p":190.0,"#factor_eqz_hr":49.8,"#factor_eqz_p":190.0,"#factor_eqb_hr":60.0,"#factor_eqb_p":190.0,"#factor_cnf_hr":1650.0,"#factor_cnf_p":130.0,"#factor_bcd_hr":37.0,"#factor_bcd_p":190.0,"#factor_x25x_hr":6.3,"#factor_x25x_p":190.0,"#factor_mtp_hr":4.0,"#factor_mtp_p":190.0,"#factor_cr29_hr":9.9,"#factor_cr29_p":190.0,"#factor_lrev3_hr":81.0,"#factor_lrev3_p":190.0,"#factor_cc_hr":8.8,"#factor_cc_p":190.0,"#factor_rmx_hr":1000.0,"#factor_rmx_p":150.0,"#factor_cm29_hr":5.2,"#factor_cm29_p":190.0,}
const factors_2080Ti={"#factor_ppw_hr":31.2,"#factor_ppw_p":220.0,"#factor_zlh_hr":72.0,"#factor_zlh_p":220.0,"#factor_zh_hr":100.0,"#factor_zh_p":220.0,"#factor_cnh_hr":1450.0,"#factor_cnh_p":160.0,"#factor_ns_hr":2800.0,"#factor_ns_p":220.0,"#factor_eqa_hr":375.0,"#factor_eqa_p":220.0,"#factor_phi2_hr":14.7,"#factor_phi2_p":220.0,"#factor_tt10_hr":60.0,"#factor_tt10_p":220.0,"#factor_cng_hr":3100.0,"#factor_cng_p":220.0,"#factor_eth_hr":52.5,"#factor_eth_p":220.0,"#factor_cnr_hr":1000.0,"#factor_cnr_p":190.0,"#factor_x16r_hr":41.0,"#factor_x16r_p":220.0,"#factor_ct31_hr":2.0,"#factor_ct31_p":220.0,"#factor_xn_hr":10.1,"#factor_xn_p":220.0,"#factor_hx_hr":30.0,"#factor_hx_p":220.0,"#factor_eqz_hr":56.5,"#factor_eqz_p":220.0,"#factor_eqb_hr":73.0,"#factor_eqb_p":220.0,"#factor_cnf_hr":2300.0,"#factor_cnf_p":160.0,"#factor_bcd_hr":45.5,"#factor_bcd_p":220.0,"#factor_x25x_hr":7.9,"#factor_x25x_p":220.0,"#factor_mtp_hr":4.6,"#factor_mtp_p":220.0,"#factor_cr29_hr":12.0,"#factor_cr29_p":220.0,"#factor_lrev3_hr":98.5,"#factor_lrev3_p":220.0,"#factor_cc_hr":10.8,"#factor_cc_p":220.0,"#factor_rmx_hr":1380.0,"#factor_rmx_p":190.0,"#factor_cm29_hr":6.1,"#factor_cm29_p":220.0,}
const factors_5700xt={"#factor_eth_hr":51.5,"#factor_eth_p":140.0,"#factor_cnh_hr":1350.0,"#factor_cnh_p":110.0,"#factor_cnf_hr":2100.0,"#factor_cnf_p":110.0,"#factor_cnr_hr":1070.0,"#factor_cnr_p":110.0,"#factor_cng_hr":300.0,"#factor_cng_p":110.0,"#factor_cr29_hr":2.5,"#factor_cr29_p":90.0,"#factor_lrev3_hr":51.0,"#factor_lrev3_p":120.0,"#factor_mtp_hr":2.0,"#factor_mtp_p":130.0,"#factor_cm29_hr":3.6,"#factor_cm29_p":140.0,"#factor_ct31_hr":1.0,"#factor_ct31_p":110.0,}
const factorKeys=["#factor_bcd_hr","#factor_bcd_p","#factor_bk14_hr","#factor_bk14_p","#factor_bk2bf_hr","#factor_bk2bf_p","#factor_bst_hr","#factor_bst_p","#factor_cn_hr","#factor_cn_p","#factor_cnf_hr","#factor_cnf_p","#factor_cng_hr","#factor_cng_p","#factor_cnh_hr","#factor_cnh_p","#factor_cnr_hr","#factor_cnr_p","#factor_cn7_hr","#factor_cn7_p","#factor_cn8_hr","#factor_cn8_p","#factor_cr29_hr","#factor_cr29_p","#factor_cm29_hr","#factor_cm29_p","#factor_ct31_hr","#factor_ct31_p","#factor_cc_hr","#factor_cc_p","#factor_esg_hr","#factor_esg_p","#factor_eq_hr","#factor_eq_p","#factor_eqb_hr","#factor_eqb_p","#factor_eqa_hr","#factor_eqa_p","#factor_eqz_hr","#factor_eqz_p","#factor_eth_hr","#factor_eth_p","#factor_grof_hr","#factor_grof_p","#factor_hx_hr","#factor_hx_p","#factor_k12_hr","#factor_k12_p","#factor_kec_hr","#factor_kec_p","#factor_lbry_hr","#factor_lbry_p","#factor_lre_hr","#factor_lre_p","#factor_lrev3_hr","#factor_lrev3_p","#factor_l2z_hr","#factor_l2z_p","#factor_mtp_hr","#factor_mtp_p","#factor_mg_hr","#factor_mg_p","#factor_ns_hr","#factor_ns_p","#factor_odo_hr","#factor_odo_p","#factor_phi_hr","#factor_phi_p","#factor_phi2_hr","#factor_phi2_p","#factor_pas_hr","#factor_pas_p","#factor_ppw_hr","#factor_ppw_p","#factor_qkf_hr","#factor_qkf_p","#factor_qbf_hr","#factor_qbf_p","#factor_rmx_hr","#factor_rmx_p","#factor_sha256f_hr","#factor_sha256f_p","#factor_sha3s_hr","#factor_sha3s_p","#factor_scryptf_hr","#factor_scryptf_p","#factor_sia_hr","#factor_sia_p","#factor_sk_hr","#factor_sk_p","#factor_skh_hr","#factor_skh_p","#factor_tsr_hr","#factor_tsr_p","#factor_tt10_hr","#factor_tt10_p","#factor_trb_hr","#factor_trb_p","#factor_x11f_hr","#factor_x11f_p","#factor_x11g_hr","#factor_x11g_p","#factor_x16r_hr","#factor_x16r_p","#factor_x22i_hr","#factor_x22i_p","#factor_x25x_hr","#factor_x25x_p","#factor_xn_hr","#factor_xn_p","#factor_zlh_hr","#factor_zlh_p","#factor_zh_hr","#factor_zh_p"];

const adapt=function(){const number_of_380=$("#adapt_380")[0].checked?parseInt($("#adapt_q_380").val()):0;const number_of_fury=$("#adapt_fury")[0].checked?parseInt($("#adapt_q_fury").val()):0;const number_of_470=$("#adapt_470")[0].checked?parseInt($("#adapt_q_470").val()):0;const number_of_480=$("#adapt_480")[0].checked?parseInt($("#adapt_q_480").val()):0;const number_of_570=$("#adapt_570")[0].checked?parseInt($("#adapt_q_570").val()):0;const number_of_580=$("#adapt_580")[0].checked?parseInt($("#adapt_q_580").val()):0;const number_of_vega56=$("#adapt_vega56")[0].checked?parseInt($("#adapt_q_vega56").val()):0;const number_of_vega64=$("#adapt_vega64")[0].checked?parseInt($("#adapt_q_vega64").val()):0;const number_of_vii=$("#adapt_vii")[0].checked?parseInt($("#adapt_q_vii").val()):0;const number_of_1050Ti=$("#adapt_1050Ti")[0].checked?parseInt($("#adapt_q_1050Ti").val()):0;const number_of_10606=$("#adapt_10606")[0].checked?parseInt($("#adapt_q_10606").val()):0;const number_of_1070=$("#adapt_1070")[0].checked?parseInt($("#adapt_q_1070").val()):0;const number_of_1070Ti=$("#adapt_1070Ti")[0].checked?parseInt($("#adapt_q_1070Ti").val()):0;const number_of_1080=$("#adapt_1080")[0].checked?parseInt($("#adapt_q_1080").val()):0;const number_of_1080Ti=$("#adapt_1080Ti")[0].checked?parseInt($("#adapt_q_1080Ti").val()):0;const number_of_1660=$("#adapt_1660")[0].checked?parseInt($("#adapt_q_1660").val()):0;const number_of_1660Ti=$("#adapt_1660Ti")[0].checked?parseInt($("#adapt_q_1660Ti").val()):0;const number_of_2060=$("#adapt_2060")[0].checked?parseInt($("#adapt_q_2060").val()):0;const number_of_2070=$("#adapt_2070")[0].checked?parseInt($("#adapt_q_2070").val()):0;const number_of_2080=$("#adapt_2080")[0].checked?parseInt($("#adapt_q_2080").val()):0;const number_of_2080Ti=$("#adapt_2080Ti")[0].checked?parseInt($("#adapt_q_2080Ti").val()):0;const number_of_5700xt=$("#adapt_5700xt")[0].checked?parseInt($("#adapt_q_5700xt").val()):0;for(let factorKey of factorKeys){const value_380=number_of_380*factors_380[factorKey]||0;const value_fury=number_of_fury*factors_fury[factorKey]||0;const value_470=number_of_470*factors_470[factorKey]||0;const value_480=number_of_480*factors_480[factorKey]||0;const value_570=number_of_570*factors_570[factorKey]||0;const value_580=number_of_580*factors_580[factorKey]||0;const value_vega56=number_of_vega56*factors_vega56[factorKey]||0;const value_vega64=number_of_vega64*factors_vega64[factorKey]||0;const value_vii=number_of_vii*factors_vii[factorKey]||0;const value_1050Ti=number_of_1050Ti*factors_1050Ti[factorKey]||0;const value_10606=number_of_10606*factors_10606[factorKey]||0;const value_1070=number_of_1070*factors_1070[factorKey]||0;const value_1070Ti=number_of_1070Ti*factors_1070Ti[factorKey]||0;const value_1080=number_of_1080*factors_1080[factorKey]||0;const value_1080Ti=number_of_1080Ti*factors_1080Ti[factorKey]||0;const value_1660=number_of_1660*factors_1660[factorKey]||0;const value_1660Ti=number_of_1660Ti*factors_1660Ti[factorKey]||0;const value_2060=number_of_2060*factors_2060[factorKey]||0;const value_2070=number_of_2070*factors_2070[factorKey]||0;const value_2080=number_of_2080*factors_2080[factorKey]||0;const value_2080Ti=number_of_2080Ti*factors_2080Ti[factorKey]||0;const value_5700xt=number_of_5700xt*factors_5700xt[factorKey]||0;$(factorKey).val((value_380+value_fury+value_470+value_480+value_570+value_580+value_vega56+value_vega64+value_vii+value_1050Ti+value_10606+value_1070+value_1070Ti+value_1080+value_1080Ti+value_1660+value_1660Ti+value_2060+value_2070+value_2080+value_2080Ti+value_5700xt).toFixed(2));}};$(".adapt").change(function(){const cardName=$(this).data("name");updateQuantityIfZero(cardName);adapt();});$(".adapt-quantity").keyup(()=>adapt());for(let factorKey of factorKeys){$(factorKey).keydown(()=>adaptUncheck());}});