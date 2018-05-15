// // TypeScript file
// class Pomelo {
//     sock: egret.WebSocket;
//     constructor(params, cb) {
//         this.init(params, cb);
//     }
//     init(params, cb) {
//         const {host, port = 80} = params;
//         const url = `ws://${host}:${port}`;
//         this.initWebSocket(url, cb);
//     }
//     initWebSocket(url, cb) {

//         this.sock = new egret.WebSocket();
//         this.sock.addEventListener(egret.ProgressEvent.SOCKET_DATA, res => {
//             console.log(res.readUTF());
//         }, this);
//         this.sock.addEventListener(egret.Event.CONNECT, res => {
//             this.sock.writeUTF('1231');
//         }, this);
//         console.log(123);
//         this.sock.connectByUrl(url);
//     }

//     request(route, msg, cb) {
//         if (arguments.length === 2 && typeof msg === 'function') {
//             cb = msg;
//             msg = {};
//         } else {
//             msg = msg || {};
//         }
//         route = route || msg.route;
//         if (!route) {
//             return;
//         }
//         this.send(msg);
//     }
//     send(packet){
//         this.sock.writeUTF(packet);
//     }
// }