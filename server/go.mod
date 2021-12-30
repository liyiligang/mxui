module github.com/liyiligang/mxrpc

go 1.15

require (
	github.com/gin-contrib/gzip v0.0.1
	github.com/gin-gonic/gin v1.7.1
	github.com/gogo/protobuf v1.3.2
	github.com/golang/protobuf v1.5.2
	github.com/liyiligang/base v0.1.2
	github.com/pkg/errors v0.9.1
	github.com/xeipuuv/gojsonschema v1.2.0
	google.golang.org/grpc v1.38.0
	gorm.io/gorm v1.20.7
)

replace github.com/liyiligang/base v0.1.2 => ../../base
