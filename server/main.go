package main

import (
	"github.com/liyiligang/manage/app"
	"log"
)

func main() {
	_, err := app.InitServer()
	if err != nil {
		log.Fatal(err)
	}
	select {}
}
