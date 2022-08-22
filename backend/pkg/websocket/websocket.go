package websocket

import (
	"github.com/gorilla/websocket"
	"log"
	"net/http"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func Upgrade(writer http.ResponseWriter, request *http.Request) (*websocket.Conn, error) {
	ws, err := upgrader.Upgrade(writer, request, nil)
	if err != nil {
		log.Println(err)
	}
	return ws, err
}
