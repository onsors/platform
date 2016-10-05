Middleware flow

Middleware functions are always executed in FIFO order. The following diagram represents the internal 
incoming request flow and how the different middleware layers are involved on it:

↓                           ↓
↓    ( Incoming request )   ↓
↓             ↓             ↓
↓      ----------------     ↓
↓      |    Router    |     ↓ --> Match a route, dispatching its middleware if required
↓      ----------------     ↓
↓             ↓             ↓
↓   ---------------------   ↓
↓   | Global middleware |   ↓ --> Dispatch on every incoming request (router, param)
↓   ---------------------   ↓
↓             ↓             ↓
↓           /   \           ↓
↓         /       \         ↓
↓       /           \       ↓
↓ [ Forward ]    [ Replay ] ↓ --> Dispatch both middleware in separated flows (route forward and replay)
↓      \             /      ↓
↓       \           /       ↓
↓        \         /        ↓
↓    -------------------    ↓
↓    | HTTP dispatcher |    ↓ --> Send requests over the network (concurrently or sequentially)
↓    -------------------    ↓
↓                           ↓


Middleware API

Middleware layer behavies and has the same interface as connect/express. In other words, you can create 
or use middleware as you already know with the typical notation function(req, res, next)

As a kind of inversion of control, rocky exposes a tiny API in every http.ClientRequest passed via the 
middleware layer:

Request

req.rocky object
.options object - Exposes the configuration options for the current request.
.proxy Rocky - Exposes the rocky instance. Use only for hacking purposes!
.route Route - Exposes the current running route. Only available in route type middleware
req.stopReplay boolean - Optional field internally checked by rocky to stop the request replay process.
Response

res.rocky object
.options object - Exposes the configuration options for the current request.
.proxy Rocky - Exposes the rocky instance. Use only for hacking purposes!
.route Route - Exposes the current running route. Only available in route type middleware