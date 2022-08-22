package main

import (
	"fmt"
	"github.com/TutorialEdge/realtime-chat-go-react/pkg/websocket"
	"net/http"
)

func main() {
	setupRoutes()
	http.ListenAndServe(":6666", nil)
}

func setupRoutes() {
	pool := websocket.NewPool()
	go pool.Start()
	http.HandleFunc("/ws", func(writer http.ResponseWriter, request *http.Request) {
		serveWs(pool, writer, request)
	})
}

func serveWs(pool websocket.Pool, writer http.ResponseWriter, request *http.Request) {
	ws, err := websocket.Upgrade(writer, request)
	if err != nil {
		fmt.Fprintf(writer, "%+V\n", err)
	}

	client := &websocket.Client{
		Conn: ws,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()
}
