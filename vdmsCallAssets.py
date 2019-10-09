import urllib2, urllib, zlib, hmac, hashlib, time, json

#documentation: https://docs.vdms.com/video/index.html#Develop/Channel.htm?Highlight=channel/assets

KTTV = '' #GUID
FS1 = '' #GUID
RBO = {} #Array of GUIDS

vdms_info={} #Expand on making call, regardless of the account

ROOT_URL = '' #Enter URL to make the call
OWNER = '' # CHANGE YOUR ID
SECRET = '' # CHANGE THIS TO YOUR SECRET
 
def Call(uri, **msg):
    msg['_owner'] = OWNER
    msg['_timestamp'] = int(time.time())
    msg = json.dumps(msg)
    msg = zlib.compress(msg, 9).encode('base64').strip()
    sig = hmac.new(SECRET, msg, hashlib.sha256).hexdigest()
    body = urllib.urlencode(dict(msg=msg, sig=sig))
    return json.loads(urllib2.urlopen(ROOT_URL + uri, body).read())

print Call('/api2/channel/assets', id=KTTV, start=1556159410, stop=1556161200)
