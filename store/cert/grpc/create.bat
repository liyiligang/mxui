openssl genrsa -out private.key 2048
openssl ecparam -genkey -name secp384r1 -out private.key
openssl req -new -x509 -sha256 -key private.key -out public.pem -days 3650
