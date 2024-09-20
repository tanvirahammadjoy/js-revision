# javascript

this is default javascript
--> |synchronous
--> |single threaded

execution context:
    |--> execution one line of code at a time
    |---> console.log("1");
    |---> console.log("2");
    |---------------------> each operation waits for the last one to complete before executing.
    |
    |--> call stack and memory heap

blocking ---------------- vs ----- non blocking

block the flow of program --       don't block execution
Read File Sync            --       Read file Async

                           js engine                                                              web API
|-----------------------------------------------------------------------|  async  |---------------------------------------|
|                                                                       |  go out | 1.Dom Api                             |
|         memory heap                            call stack             |-------->| 2.set timeout                         |
|    |----------------------|            |-------------------------|    |         | 3.set interval                        |
|    |                      |            |                         |    |         | 4.fetch()                             |
|    |                      |            |                         |    |         |                                       |
|    |                      |            |                         |    |         |                                       |
|    |                      |            |                         |    |         |                                       |
|    |                      |            |                         |    |         |                                       |
|    |                      |            |                         |    |         |                                       |
|    |                      |            |                         |    |         |_______________________________________|
|    |                      |            |                         |    |          high priority promise micro task queue
|    |                      |            |                         |    |         |---------------------------------------|
|    |                      |            |       function3         |    |  second |fetch()                                |
|    |                      |            |       function2         |    |<--------|promise                                |
|    |                      |            |       function1         |    |         |_______________________________________|
|    |                      |            |     global context      |    |          task queue
|    |______________________|            |_________________________|    |         |---------------------------------------|
|                                                                       |  third  |set timeout and dom api                |
|                                                                       |<--------|set interval                           |
|_______________________________________________________________________|         |_______________________________________|
                                                                                    than add to call stack

first will run synchronous code than the web api task first micro task queue than task queue.
