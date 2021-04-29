module github.com/liyiligang/manage

go 1.15

require (
	github.com/cornelk/hashmap v1.0.1
	github.com/gin-contrib/gzip v0.0.1
	github.com/gin-gonic/gin v1.7.1
	github.com/gogo/protobuf v1.3.1
	github.com/liyiligang/base v0.1.2
	github.com/orcaman/concurrent-map v0.0.0-20190826125027-8c72a8bb44f6
	github.com/pkg/errors v0.9.1
	google.golang.org/grpc v1.26.0
	gorm.io/gorm v1.20.7
)

replace github.com/liyiligang/base v0.1.2 => ../../base
