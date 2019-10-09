import requests


#devHeaders = {'x-api-key': 'DEFAULT', 'authorization': 'Bearer Token'}
#qaHeaders = {'x-api-key': 'DEFAULT', 'authorization': 'Bearer Token'} # set you headers
#prodHeaders = {'x-api-key': 'DEFAULT', 'authorization': 'Bearer Token'}
base_URL = # "cms.url.somewhere.com" # Set a base url so, if later given an array you could just concatenate the ID



CPELST377 = ["KSAS", "KTBY", "KYOU", "WACH", "WWC_MERGED_FEED", "FS4KEvents2-Roku-Monitor", "FS4KEvents2", "FBC-NAT-ARIZONA"]
FX = ["FX","FXW", "FXM", "FXX","FXXW"]
NatGeo = ["NGC", "NGCW", "NGEOWILD"]

mediaSources = ["WDCA", "KCOP", "KTXH", "WRBW", "KDFI", "WMYT", "KICU", "KUTP", "WWOR", "WPWR", "WFTC"]
mediaSources1 = ["KABB", "KADN", "KARD", "KATN", "KAYU", "KBFX", "KBSI", "KBTV", "KBVU", "KCBA", "KCIT", "KCPQ", "KCVU", "KDFX", "KDSM", "KDVR", "KECY", "KFBB", "KCYU", "KFJX", "KFNB", "KFOX", "KFQX", "KFTA", "KFXA"]
mediaSources2 = ["KFXK", "KFXL", "KFXO", "KFXV", "KHBB", "KHMT", "KHON", "KIDY", "KJNB", "KJTL", "KJTV", "KJUD", "KKFX", "KLJB", "KLRT", "KLSR", "KLWY", "KMPH", "KMSB", "KMSS", "KMVU", "KNIN", "KNPN", "KOKH", "KOKI"]
mediaSources3 = ["KPEJ", "KPTH", "KPTM", "KPTV", "KQDS", "KQFX", "KRBK", "KRQE", "KRXI", "KRXL", "KSTU", "KSWB", "KBTY", "KTMF", "KTMJ", "KTTW", "KTVI", "KTXL", "KUQI", "KVCT", "KVHP", "KVRR", "KVVU", "KWKT", "KWYB"]
mediaSources4 = ["KXLT", "KXOF", "KXPI", "KXRM", "KXVA", "KYCU", "WABG", "WAGH", "WALA", "WBFF", "WBOC", "WBRC", "WCOV", "WDAF", "WDBD", "WDFX", "WDKY", "WDRB", "WEMT", "WEVV", "WFFF", "WFFT", "WFLX", "WFOX", "WFTX"]
mediaSources5 = ["WFVX", "WFXB", "WFXG", "WFXL", "WFXP", "WFXR", "WFXT", "WFXV", "WGBC", "WGEM", "WGGB", "WGHP", "WGMB", "WGXA", "WHBQ", "WHNS", "WHPM", "WICZ", "WITI", "WJKT", "WJW", "WLAX", "WLIO", "WLOV", "WLUK"]
mediaSources6 = ["WMSN", "WNAC", "WNTZ", "WNYF", "WOLF", "WPBI", "WPFO", "WPGH", "WPGX", "WPMT", "WQRF", "WRAZ", "WRGT", "WRLH", "WRSP", "WSBT", "WSFX", "WSMH", "WSVN", "WSYM", "WSYT", "WTAT", "WTGS", "WTHI", "WTIC"]
mediaSources7 = ["WTNZ", "WTOV", "WTTE", "WTVC", "WTWC", "WUHF", "WUPW", "WUTV", "WVAH", "WVBT", "WVNS", "WVUE", "WWCP", "WXIN", "WXIX", "WXMI", "WXTX", "WXXA", "WXXV", "WYDC", "WYDO", "WYFX", "WYZZ", "WZDX", "WZTV"]

for mediaSourceId in CPELST377: # we can loop through the array to proccess all in list
  response = requests.delete(base_URL+mediaSourceId, headers=<headers>) 
  print("Deleting" + " " + mediaSourceId + " " +  "as a media source from <ENV> DPP!")
  print(response) # print the response to get back HTTP status code
