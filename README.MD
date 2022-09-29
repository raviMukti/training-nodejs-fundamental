## Training Node JS Fundamental

### 1. Threadpool
   - Threadpool merupakan tempat dimana kita menyimpan thread, ketika kita butuh kita akan ambil dari threadpool, ketika sudah selesai, kita akan kembalikan thread nya ke threadpool
   - Dengan threadpool, kita bisa memanfaatkan thread yang sama berkali-kali, tanpa harus membuat thread baru terus menerus
### 2. Threadpool Queue
    - Jika semua thread penuh, kita tidak bisa meminta lagi thread ke threadpool. Kita harus menunggu sampai ada thread yang tidak sibuk
    - Biasanya threadpool memiliki tempat untuk menyimpan tugas yang belum dikerjakan oleh thread di tempat bernama queue (antrian)
    - Ketika kita mengirim perintah ke threadpool, perintah tersebut akan dikirim ke queue, lalu perintah-perintah itu akan dieksekusi satu per satu oleh thread yang tersedia di threadpool
### 3. Threadpool Web Model
    - Dahulu pembuatan web application sangat populer menggunakan threadpool model
    - Setiap request yang masuk ke web server akan diproses oleh satu buah thread
    - Dengan demikian ketika banyak request masuk, semua bisa diproses secara paralel karena akan ditangani oleh thread masing-masing
    - Namun threadpool model ini memiliki kekurangan, ketika thread sedang sibuk semua, secara otomatis request selanjutnya harus menunggu sampai ada thread yang selesai melakukan tugas sebelumnya
    - Contoh web server yang menggunakan threadpool model, seperti Apache HTTPD, Apache Tomcat, dan lain-lain
### 4. Blocking
    - Saat kita membuat kode program, secara default kode program akan berjalan secara blocking atau synchronous
    - Artinya kita harus menunggu sebuah kode selesai sebelum kode selanjutnya dieksekusi
    - Contoh ketika kita membuat kode program untuk membaca file, jika kode kita blocking, maka kita harus menunggu program selesai membaca file, baru kita bisa melanjutkan kode program selanjutnya
### 5. Non-Blocking
    - Non-Blocking berbeda dengan Blocking, kode program Non-Blocking akan dieksekusi tanpa harus menunggu kode program tersebut selesai
    - Non-Blocking akan dijalankan secara asynchronous
    - Ketika memanggil kode Non-Blocking, biasanya kita perlu mengirimkan callback untuk dipanggil oleh kode Non-Blocking tersebut ketika kodenya susah selesai
    - Contoh-contoh Non-Blocking sudah kita bahas di kelas JavaScript Async, seperti AJAX, Fetch API, dan lain-lain
    - Di NodeJS, hampir semua fiturnya mendukung kode Non-Blocking
### 6. Event-Loop
    - Event-Loop merupakan single thread proses yang digunakan untuk mengeksekusi kode Non-Blocking
    - Karena Event-Loop hanya menggunakan single thread, maka kita harus berhati-hati ketika membuat blocking code, karena bisa memperlambat proses eksekusi kode kita
    - Event-Loop sendiri sebenarnya tugasnya hanya menerima dan mengirim eksekusi kode ke C++ Threadpool, oleh karena itu selalu usahakan menggunakan kode nonblocking agar proses blocking-nya dikerjakan di C++ threadpool
    - Event-Loop akan menerima response dari C++ threadpool yang di kirim via callback
### 7.  C++ Threadpool / Worker Threadpool
    - NodeJS Menggunakan C++ Threadpool untuk workernya, yaitu threadpool untuk melakukan pekerjaan
    - Libuv adalah library yang digunakan di NodeJS, dimana secara default libuv menggunakan 4 thread di dalam threadpool nya, hal ini menjadikan kita bisa melakukan 4 pekerjaan blocking sekaligus dalam satu waktu
    - Jika terlalu banyak pekerjaan blocking, kita bisa mengubah jumlah thread di libuv dengan pengaturan environment variable UV_THREADPOOL_SIZE
### 8. Menjalankan Kode JavaScript
    - Karena NodeJS tidak memerlukan Web Browser, jadi kita bisa langsung menjalankan program JavaScript kita menggunakan aplikasi NodeJS lewat terminal / command promt, dengan perintah : 
    - node namafile.js
### 9. Node JS REPL (Read Eval Print Loop)
    - REPL singkatan dari Read Eval Print Loop
    - Yaitu mekanisme dimana program bisa membaca langsung kode program yang diketikkan, lalu mengeksekusinya, menampilkan hasilnya, lalu mengulangi dari awal lagi
    - NodeJS mendukung REPL, sehingga lebih mudah ketika belajar
    - Namun tetap, saya menyarankan menyimpan kode program di file JavaScript, agar lebih mudah diubah ketika terjadi masalah
    - Untuk menggunakan NodeJS REPL, cukup jalankan aplikasi node saja
### 10. Node JS Standard Library
    - Saat kita belajar JavaScript, di Web Browser, terdapat fitur-fitur yang bernama Web API
    - Kebanyakan fitur Web API hanya berjalan di Web Browser, sehingga tidak bisa jalan di NodeJS
    - NodeJS sendiri hanya menggunakan bahasa pemrogaman JavaScript nya, namun tidak mengadopsi fitur Web API nya, karena itu hanya berjalan di Web Browser
    - NodeJS sendiri memiliki standard library yang bisa kita gunakan untuk mempermudah pembuatan aplikasi
    - https://nodejs.org/dist/latest-v16.x/docs/api/
### 11. Modules
    - Standard Library yang terdapat di NodeJS bisa kita gunakan seperti layaknya JavaScript Modules
    - Jika belum mengerti tentang JavaScript Modules, silahkan pelajari kelas saya tentang JavaScript Modules
    - Karena NodeJS menggunakan Modules, jika kita ingin menggunakan Modules, kita juga perlu memberi tahu bahwa file JavaScript kita menggunakan Modules, caranya dengan mengubah nama file dari .js menjadi .mjs
### 12. Require Function
    - Awal ketika NodeJS rilis, fitur JavaScript Modules belum rilis, namun sekarang JavaScript sudah banyak menggunakan JavaScript Modules
    - NodeJS pun awalnya tidak menggunakan JavaScript Modules, namun sekarang NodeJS sudah bisa menggunakan JavaScript Modules, dan sangat direkomendasikan menggunakannya
    - Namun awal sebelum Modules, NodeJS menggunakan function require() untuk melakukan import file
    - Di materi ini saya sengaja bahas, agar tidak bingung ketika kita melihat tutorial yang masih menggunakan function require
### 13. Global Async
    - Saat kita belajar JavaScript, untuk menggunakan Async Await, biasanya kita perlu membuat terlebih dahulu function yang kita tandai sebagai async
    - Saat kita menggunakan Module, secara default, global code adalah Async, oleh karena itu kita bisa menggunakan Async Await
    - Kecuali jika kita membuat function, maka function tersebut harus kita tandai sebagai Async jika ingin menggunakan Async Await
### 14. OS
    - OS merupakan standard library yang bisa digunakan untuk mendapatkan informasi tentang sistem operasi yang digunakan
### 15. Path
    - Path merupakan standard library yang bisa kita gunakan untuk bekerja dengan lokasi file dan directory / folder
### 16. File System
    - File System merupakan standard library yang bisa digunakan untuk memanipulasi file system
    - Dalam File System, terdapat 3 jenis library
    - Pertama library yang bersifat blocking atau synchronous
    - Kedua library yang bersifat non-blocking atau asynchronous menggunakan callback
    - Ketika library yang bersifat non-blocking atau asynchronous tapi menggunakan promise
### 17. Debugger
    - NodeJS memiliki fitur debugger, dimana kita bisa mengikuti tahapan eksekusi program di NodeJS
    - Hal ini sangat cocok ketika kita melakukan proses debugging, mencari sebab masalah yang terjadi di aplikasi kita
### 18. Breakpoint
    - Dalam debugging, terdapat istilah breakpoint, yaitu lokasi dimana kita ingin menghentikan sementara eksekusi kode program
    - Biasanya ini dilakukan untuk mengawasi data-data di sekitar lokasi berhentinya tersebut
    - Untuk menambahkan breakpoint, kita bisa menggunakan kata kunci: debugger
### 19. Menjalankan Mode Debug
    - Jika kita menjalankan file JavaScript hanya dengan menggunakan perintah node namafile.js, maka secara default dia tidak akan jalan dalam mode debug
    - Agar jalan dalam mode debug, kita harus menambahkan perintah inspect :
    node inspect namafile.js
### 20. Perintah Debugger
    - cont, c: Continue execution
    - next, n: Step next
    - step, s: Step in
    - out, o: Step out
    - pause: Pause running code
### 21. DNS
    - DNS merupakan standard library yang bisa digunakan untuk bekerja dengan DNS (domain name server)
### 22. Events
    - Events adalah standard library di NodeJS yang bisa digunakan sebagai implementasi Event Listener
    - Di dalam Events, terdapat sebuah class bernama EventEmitter yang bisa digunakan untuk menampung data listener per jenis event
    - Lalu kita bisa melakukan emmit untuk mentrigger jenis event dan mengirim data ke event tersebut
### 23. Globals
    - Di dalam NodeJS, terdapat library berupa variable atau function yang secara global bisa diakses dimana saja, tanpa harus melakukan import
    - Kita bisa melihat detail apa saja fitur yang terdapat secara global di halaman dokumentasinya
### 24. Process
    - Process merupakan standard library yang digunakan untuk mendapatkan informasi proses NodeJS yang sedang berjalan
    - Process juga merupakan instance dari EventEmitter, sehingga kita bisa menambahkan listener kedalam Process
### 25. Readline
    - Readline merupakan standard library yang digunakan untuk membaca input
    - Namun pada saat dibuat video ini, Readline hanya mendukung versi callback di versi NodeJS LTS 16
    - Di NodeJS 17 sudah mendukung Promise sehingga lebih mudah digunakan, namun itupun masih dalam tahap experimental
### 26. Report
    - Report merupakan fitur yang terdapat di NodeJS untuk membuat laporan secara otomatis dalam file ketika sesuatu terjadi pada aplikasi NodeJS kita
### 27. Buffer
    - Buffer merupakan object yang berisikan urutan byte dengan panjang tetap
    - Buffer merupakan turunan dari tipe data Uint8Array
### 28. Buffer Encoding
    - Buffer juga bisa digunakan untuk melakukan encoding dari satu encoding ke encoding yang lain
    - Ada banyak encoding yang didukung oleh Buffer, misal utf8, ascii,  hex, base64, base64url dan lain-lain
### 29. Stream
    - Stream adalah standard library untuk interface aliran data di NodeJS
    - Ada banyak sekali Stream object di NodeJS
    - Stream bisa jadi object yang bisa dibaca, atau bisa di tulis, dan Stream adalah turunan dari EventEmitter
### 30. Timer
    - Timer merupakan standard library untuk melakukan scheduling
    - Function di Timer terdapat di globals, sehingga kita bisa menggunakannya tanpa melakukan import, namun semua function Timer menggunakan Callback
    - Jika kita ingin menggunakan Timer versi Promise, kita bisa meng-import dari module timer/promise
### 31. Net
    - Net merupakan standard library yang bisa digunakan untuk membuat network client dan server berbasis TCP
    - Net Server dan Client merupakan object Stream, sehingga kita bisa baca datanya, tulis datanya dan juga menambahkan listener
### 32. URL
    - URL merupakan standard library untuk bekerja dengan URL
### 33. Util
    - Util adalah standard library yang berisikan utility-utility yang bisa kita gunakan untuk mempermudah pembuatan kode program di NodeJS
### 34. Zlib
    - Zlib adalah standard library yang digunakan untuk melakukan kompresi menggunakan Gzip
### 35. Console
    - Console adalah standard library yang sudah sering kita gunakan
    - Secara global, object console bisa kita gunakan tanpa harus melakukan import module, dan console melakukan print text nya ke stdout
    - Namun jika kita juga bisa membuat object Console sendiri jika kita mau
### 36. Worker Threads
    - Worker Threads adalah standard library yang bisa kita gunakan untuk menggunakan thread ketika mengeksekusi JavaScript secara paralel
    - Worker Threads sangat cocok ketika kita membuat kode program yang butuh jalan secara paralel, dan biasanya kasusnya adalah ketika kode program kita membutuhkan proses yang CPU intensive, seperti misalnya enkripsi atau kompresi
    - Cara kerja Worker Threads mirip dengan Web Worker di JavaScript Web API
### 37. HTTP Client
    - NodeJS juga memiliki standard library untuk HTTP
    - Salah satu fitur di module HTTP adalah HTTP Client, dimana kita bisa melakukan simulasi HTTP Request menggunakan NodeJS
    - Terdapat 2 jenis module HTTP di NodeJS, HTTP dan HTTPS
### 38. HTTP Server
    - Standard Library HTTP juga tidak hanya bisa digunakan untuk membuat HTTP Client, tapi juga bisa digunakan untuk membuat HTTP Server
    - Untuk kasus sederhana, cocok sekali jika ingin membuat HTTP Server menggunakan standard library NodeJS, namun untuk kasus yang lebih kompleks, direkomendasikan menggunakan library atau framework yang lebih mudah penggunaannya
### 39. Cluster
    - Seperti yang dijelaskan di awal, bahwa NodeJS itu secara default dia berjalan single thread, kecuali jika kita membuat thread manual menggunakan worker thread, tapi tetap dalam satu process
    - NodeJS memiliki standard library bernama Cluster, dimana kita bisa menjalankan beberapa process NodeJS secara sekaligus
    - Ini sangat cocok ketika kita menggunakan CPU yang multicore, sehingga semua core bisa kita utilisasi dengan baik, misal kita jalankan process NodeJS sejumlah CPU core
### 40. Cluster Primary dan Worker
    - Di dalam Cluster, terdapat 2 jenis aplikasi, Primary dan Worker
    - Primary biasanya digunakan sebagai koordinator atau manajer untuk para Worker
    - Sedangkan Worker sendiri adalah aplikasi yang menjalankan tugas nya