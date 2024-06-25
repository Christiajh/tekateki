const questions = [
    {
        question: "Empat orang duduk dalam satu barisan. Alice tidak duduk di ujung mana pun. Bob duduk di sebelah kanan Alice tetapi tidak harus di sebelahnya. Charlie duduk di sebelah kiri Bob. David duduk di salah satu ujung. Siapa yang duduk di ujung lainnya?",
        options: ["Alice", "Bob", "Charlie", "David"],
        correctAnswer: 2
    },
    {
        question: "Anda berada di sebuah kompetisi di mana Anda memiliki pilihan antara berkompetisi dengan banyak peserta tetapi peluang menang rendah, atau berkompetisi dengan sedikit peserta tetapi peluang menang tinggi. Bagaimana strategi Anda untuk memilih kompetisi yang akan diikuti?",
        options: [
            "Berkompetisi dengan banyak peserta dan peluang menang rendah",
            "Berkompetisi dengan sedikit peserta dan peluang menang tinggi",
            "Mencari kompetisi yang memiliki hadiah lebih besar",
            "Berlatih lebih keras untuk meningkatkan peluang menang",
            "Mengikuti keduanya untuk meningkatkan pengalaman kompetisi"
        ],
        correctAnswer: 1 // Berkompetisi dengan sedikit peserta dan peluang menang tinggi
    },
    {
        question: "Dalam sebuah simulasi bencana, Anda memiliki pilihan untuk menyelamatkan lima orang yang terjebak di bawah reruntuhan atau satu orang yang terperangkap di dalam mobil terbakar. Pilihan mana yang harus Anda ambil untuk memaksimalkan jumlah nyawa yang diselamatkan?",
        options: [
            "Lima orang di bawah reruntuhan",
            "Satu orang di dalam mobil terbakar",
            "Menyelamatkan kedua kelompok tersebut dengan bantuan tambahan",
            "Tidak menyelamatkan siapa pun",
            "Menilai ulang situasi untuk mencari opsi lain yang lebih baik"
        ],
        correctAnswer: 0 // Lima orang di bawah reruntuhan
    },
    {
        question: "Anda memimpin tim riset yang memiliki dua proyek penting: satu berpotensi untuk menghasilkan keuntungan besar tetapi dengan risiko tinggi, dan satu lagi yang lebih stabil tetapi tidak memiliki potensi keuntungan besar. Bagaimana Anda memilih proyek yang akan diberikan prioritas pertama?",
        options: [
            "Proyek berpotensi keuntungan besar dengan risiko tinggi",
            "Proyek stabil dengan potensi keuntungan kecil",
            "Mengkaji lebih lanjut mengenai kedua proyek",
            "Tidak memprioritaskan proyek manapun",
            "Memberikan proyek yang stabil tetapi potensial lebih banyak perhatian"
        ],
        correctAnswer: 1 // Proyek stabil dengan potensi keuntungan kecil
    },
    {
        question: "Anda diberi kesempatan untuk memilih antara menerima pekerjaan yang menjanjikan gaji tinggi tetapi dengan tekanan kerja yang besar, atau pekerjaan dengan gaji yang lebih rendah tetapi lingkungan kerja yang lebih nyaman. Mana yang akan Anda pilih dan mengapa?",
        options: [
            "Pekerjaan dengan gaji tinggi dan tekanan kerja besar",
            "Pekerjaan dengan gaji rendah dan lingkungan kerja nyaman",
            "Mencari tahu tentang lebih banyak opsi pekerjaan",
            "Tidak menerima tawaran pekerjaan mana pun",
            "Memilih pekerjaan dengan gaji tinggi dan berupaya mengelola tekanan dengan baik"
        ],
        correctAnswer: 1 // Pekerjaan dengan gaji rendah dan lingkungan kerja nyaman
    },
    {
        question: "Saya adalah sebuah angka yang lebih besar dari 10 tetapi kurang dari 20. Saya adalah angka ganjil dan jumlah digit saya adalah 8. Siapakah saya?",
        options: ["11", "13", "15", "17"],
        correctAnswer: 2 // 17
    },
    {
        question: "Dalam sebuah investigasi kejahatan, detektif mewawancarai empat tersangka. Alex berkata, 'Blake yang melakukannya.' Blake berkata, 'Chris yang melakukannya.' Chris berkata, 'Blake berbohong.' Drew berkata, 'Alex berbohong.' Jika hanya satu dari mereka yang mengatakan kebenaran, siapa yang melakukan kejahatan?",
        options: ["Alex", "Blake", "Chris", "Drew"],
        correctAnswer: 0 // Alex
    },
    {
        question: "Saya adalah sebuah benda yang memiliki empat kaki, tetapi tidak bisa berjalan. Saya sering digunakan untuk makan atau bekerja. Siapakah saya?",
        options: ["Kursi", "Meja", "Lemari", "Ranjang"],
        correctAnswer: 1 // Meja
    },
    {
        question: "Jika semua siswa di kelas memegang buku, dan sebagian dari mereka juga memegang pena, mana yang benar?",
        options: ["Semua siswa memegang buku dan pena", "Sebagian siswa memegang buku dan pena", "Tidak ada siswa yang memegang pena", "Semua siswa hanya memegang buku"],
        correctAnswer: 1 // Sebagian siswa memegang buku dan pena
    },
    {
        question: "Saya memiliki kunci tetapi tidak memiliki pintu. Saya dapat membuka sesuatu tetapi tidak bisa masuk. Siapakah saya?",
        options: ["Kunci rumah", "Kunci mobil", "Kunci jawaban", "Kunci keyboard"],
        correctAnswer: 3 // Kunci keyboard
    },
    {
        question: "Jika sebagian besar anggota klub adalah pelajar, dan semua pelajar adalah anggota perpustakaan, maka mana yang benar?",
        options: ["Semua anggota klub adalah anggota perpustakaan", "Semua anggota perpustakaan adalah anggota klub", "Sebagian anggota klub adalah anggota perpustakaan", "Sebagian anggota perpustakaan adalah anggota klub"],
        correctAnswer: 0 // Semua anggota klub adalah anggota perpustakaan
    },
    {
        question: "Sebagai seorang ahli strategi militer, Anda berhadapan dengan situasi di mana dua negara tengah berselisih perbatasan. Satu negara memiliki kekuatan militer yang jauh lebih besar dan meminta negosiasi untuk mendapatkan kontrol penuh atas wilayah yang disengketakan. Negara lain bersikeras untuk menyelesaikan sengketa ini dengan perundingan damai. Bagaimana Anda akan menyarankan kedua negara untuk menyelesaikan konflik ini?",
        options: [
            "Mengusulkan negosiasi langsung untuk menyerahkan kontrol wilayah kepada negara yang lebih kuat militer",
            "Mendorong negara yang lebih kuat untuk mengakui hak kedaulatan negara lain atas wilayah tersebut",
            "Menyarankan penyelesaian melalui pertempuran terbuka untuk menentukan pemenangnya",
            "Mengusulkan mediasi internasional untuk menengahi perselisihan ini",
            "Mengembangkan solusi kompromi yang dapat diterima kedua belah pihak"
        ],
        correctAnswer: 4 // Mengembangkan solusi kompromi yang dapat diterima kedua belah pihak
    },
    {
        question: "Sebagai seorang pengusaha sukses, Anda menghadapi pilihan antara memperluas bisnis Anda ke pasar internasional dengan potensi keuntungan besar tetapi risiko keuangan yang tinggi, atau mempertahankan operasi domestik yang stabil tetapi dengan pertumbuhan yang terbatas. Bagaimana Anda akan mengevaluasi dan memilih langkah terbaik untuk bisnis Anda?",
        options: [
            "Memperluas bisnis ke pasar internasional untuk mengambil keuntungan dari potensi pertumbuhan yang lebih besar",
            "Mempertahankan operasi domestik untuk menghindari risiko keuangan yang tinggi di pasar internasional",
            "Melakukan studi pasar mendalam untuk memastikan kesesuaian langkah ekspansi internasional",
            "Mengalokasikan sumber daya untuk mengembangkan inovasi produk di pasar domestik",
            "Membentuk kemitraan strategis dengan perusahaan lokal untuk memperkuat posisi pasar domestik"
        ],
        correctAnswer: 0 // Memperluas bisnis ke pasar internasional untuk mengambil keuntungan dari potensi pertumbuhan yang lebih besar
    },
    {
        question: "Anda adalah seorang peneliti senior yang bekerja pada proyek ilmiah besar untuk menemukan vaksin baru. Setelah tahap awal penelitian, Anda memiliki opsi untuk melanjutkan penelitian dengan mengalokasikan lebih banyak sumber daya untuk pengembangan, atau menghentikan proyek dan mengalihkan fokus pada riset alternatif yang berpotensi lebih menguntungkan. Bagaimana Anda akan memutuskan langkah berikutnya?",
        options: [
            "Melanjutkan penelitian dengan mengalokasikan lebih banyak sumber daya untuk pengembangan vaksin baru",
            "Menghentikan proyek dan mengalihkan sumber daya untuk riset alternatif yang berpotensi lebih menguntungkan",
            "Mengajukan proposal dana tambahan untuk mendukung proyek vaksin baru",
            "Mengadakan pertemuan dengan tim peneliti untuk mengevaluasi hasil penelitian sejauh ini",
            "Menyusun laporan riset yang komprehensif untuk ditinjau oleh badan pengawas ilmiah"
        ],
        correctAnswer: 0 // Melanjutkan penelitian dengan mengalokasikan lebih banyak sumber daya untuk pengembangan vaksin baru
    },
    {
        question: "Sebagai seorang arsitek terkemuka, Anda memiliki tanggung jawab untuk merancang sebuah bangunan pencakar langit yang ikonik di pusat kota. Anda dihadapkan pada pilihan antara memilih desain yang mengedepankan keindahan estetika tetapi menghadapi tantangan teknis besar, atau memilih desain yang lebih fungsional dan dapat dibangun dengan cepat tetapi kurang inovatif dari segi desain. Bagaimana Anda akan memutuskan desain yang tepat untuk proyek ini?",
        options: [
            "Memilih desain yang mengedepankan keindahan estetika meskipun menghadapi tantangan teknis besar",
            "Memilih desain yang lebih fungsional dan dapat dibangun dengan cepat untuk memenuhi kebutuhan praktis",
            "Berkolaborasi dengan tim arsitek untuk menggabungkan elemen estetika dan fungsionalitas yang optimal",
            "Mengorganisir pertemuan dengan pemangku kepentingan untuk menetapkan prioritas desain proyek",
            "Mengevaluasi dampak jangka panjang dari kedua opsi desain terhadap kota dan masyarakat sekitar"
        ],
        correctAnswer: 2 // Berkolaborasi dengan tim arsitek untuk menggabungkan elemen estetika dan fungsionalitas yang optimal
    },
    {
        question: "Jika hanya beberapa guru di sekolah yang mengajar matematika, dan semua guru yang mengajar matematika juga mengajar fisika, maka mana yang benar?",
        options: ["Semua guru di sekolah mengajar fisika", "Semua guru yang mengajar fisika juga mengajar matematika", "Beberapa guru di sekolah mengajar fisika", "Tidak ada guru di sekolah yang mengajar fisika"],
        correctAnswer: 2 // Beberapa guru di sekolah mengajar fisika
    },
    {
        question: "Saya selalu di depanmu tetapi tidak bisa kamu lihat. Saya datang setiap hari tetapi tidak pernah tinggal. Siapakah saya?",
        options: ["Waktu", "Masa depan", "Bayangan", "Cahaya"],
        correctAnswer: 1 // Masa depan
    },
    {
        question: "Jika sebagian dari tanaman di kebun adalah bunga, dan semua bunga adalah tanaman, maka mana yang benar?",
        options: ["Semua tanaman di kebun adalah bunga", "Semua bunga adalah tanaman di kebun", "Sebagian tanaman di kebun adalah bunga", "Semua tanaman di kebun bukan bunga"],
        correctAnswer: 2 // Sebagian tanaman di kebun adalah bunga
    },
    {
        question: "Saya memiliki ekor tetapi bukan hewan. Saya memiliki sayap tetapi bukan burung. Saya bisa terbang tetapi bukan pesawat. Siapakah saya?",
        options: ["Naga", "Kupu-kupu", "Layangan", "Helikopter"],
        correctAnswer: 2 // Layangan
    },
    {
        question: "Jika semua burung bisa terbang, dan sebagian hewan di kebun binatang adalah burung, maka mana yang benar?",
        options: ["Semua hewan di kebun binatang bisa terbang", "Sebagian hewan di kebun binatang bisa terbang", "Tidak ada hewan di kebun binatang yang bisa terbang", "Semua burung di kebun binatang bisa terbang"],
        correctAnswer: 3 // Semua burung di kebun binatang bisa terbang
    },
    {
        question: "Saya adalah sebuah kata yang tetap sama ketika dibaca dari depan maupun belakang. Saya bisa berarti tempat tinggal. Siapakah saya?",
        options: ["Rumah", "Kamar", "Kasur", "Gubug"],
        correctAnswer: 3 // Gubug
    },
    {
        question: "Jika semua buku di rak adalah novel, dan sebagian dari novel itu adalah fiksi, maka mana yang benar?",
        options: ["Semua novel adalah buku fiksi", "Semua buku fiksi adalah novel", "Sebagian novel adalah buku fiksi", "Tidak ada novel yang merupakan buku fiksi"],
        correctAnswer: 2 // Sebagian novel adalah buku fiksi
    },
    {
        question: "Saya adalah sebuah kata yang terdiri dari lima huruf, namun jika kamu menghilangkan dua huruf terakhir saya tetap akan terdengar sama. Siapakah saya?",
        options: ["Pesawat", "Pisau", "Perahu", "Pulau"],
        correctAnswer: 0 // Pesawat
    },
    {
        question: "Anda berada di tengah-tengah perang saudara di sebuah negara. Sebagai pemimpin pasukan, Anda memiliki dua pilihan strategi: melancarkan serangan besar-besaran untuk mengambil alih ibu kota musuh dalam waktu singkat dengan risiko tinggi, atau melakukan serangan gerilya untuk merusak pasokan musuh secara bertahap dengan risiko kecil. Mana strategi yang akan Anda pilih dan mengapa?",
        options: [
            "Melancarkan serangan besar-besaran untuk mengambil alih ibu kota musuh",
            "Melakukan serangan gerilya untuk merusak pasokan musuh",
            "Menjalin aliansi dengan faksi musuh untuk menghindari konflik",
            "Menjaga status quo tanpa melakukan tindakan militer",
            "Menilai ulang situasi berdasarkan informasi terbaru dan intelijen"
        ],
        correctAnswer: 1 // Melakukan serangan gerilya untuk merusak pasokan musuh
    },
    {
        question: "Anda adalah seorang arkeolog yang menemukan dua situs kuno yang belum pernah dieksplorasi sebelumnya: satu terletak di daerah hutan belantara yang berbahaya dengan potensi penemuan besar tetapi juga berisiko tinggi, dan satu lagi terletak di dataran rendah yang lebih aman tetapi memiliki potensi penemuan yang lebih kecil. Bagaimana Anda memilih untuk mengalokasikan sumber daya penelitian Anda?",
        options: [
            "Mengeksplorasi situs di daerah hutan belantara dengan risiko tinggi",
            "Mengeksplorasi situs di dataran rendah dengan potensi penemuan kecil",
            "Mengalokasikan sumber daya penelitian secara merata untuk kedua situs",
            "Menyewa tim peneliti untuk melakukan penilaian lebih lanjut",
            "Meminta bantuan dari otoritas setempat untuk penilaian risiko"
        ],
        correctAnswer: 0 // Mengeksplorasi situs di daerah hutan belantara dengan risiko tinggi
    },
    {
        question: "Anda adalah seorang manajer proyek yang bertanggung jawab atas dua proyek besar: satu proyek membangun jembatan penting untuk menghubungkan dua kota besar dengan biaya dan jangka waktu yang besar, dan satu lagi proyek membangun sistem irigasi untuk wilayah pedesaan dengan biaya yang lebih rendah tetapi dampak sosial yang signifikan. Bagaimana Anda memprioritaskan antara kedua proyek tersebut?",
        options: [
            "Memprioritaskan proyek membangun jembatan penting antarkota",
            "Memprioritaskan proyek membangun sistem irigasi untuk wilayah pedesaan",
            "Menghentikan kedua proyek dan mengalokasikan sumber daya untuk proyek lain",
            "Mencari pendanaan tambahan untuk kedua proyek secara bersamaan",
            "Mengkaji ulang dampak jangka panjang dari kedua proyek"
        ],
        correctAnswer: 0 // Memprioritaskan proyek membangun jembatan penting antarkota
    },
    {
        question: "Anda adalah seorang kapten kapal selam yang terjebak di perairan musuh dengan dua opsi: mencoba melarikan diri dengan risiko terdeteksi atau tetap bersembunyi dan menunggu bantuan dengan risiko kehabisan pasokan oksigen. Bagaimana Anda memutuskan langkah terbaik untuk dilakukan?",
        options: [
            "Mencoba melarikan diri dengan risiko terdeteksi",
            "Tetap bersembunyi dan menunggu bantuan",
            "Menghancurkan kapal selam untuk menghindari penangkapan",
            "Mengirim sinyal darurat untuk meminta bantuan segera",
            "Mengadakan perundingan dengan pihak musuh untuk menyelesaikan krisis"
        ],
        correctAnswer: 1 // Tetap bersembunyi dan menunggu bantuan
    },
    {
        question: "Saya adalah sesuatu yang kamu bisa menulis tanpa tinta dan membaca tanpa kertas. Siapakah saya?",
        options: ["Komputer", "Papan tulis", "Cermin", "Buku elektronik"],
        correctAnswer: 3 // Buku elektronik
    },
    {
        question: "Jika semua mobil di jalan berwarna merah, dan sebagian kendaraan di jalan adalah mobil, maka mana yang benar?",
        options: ["Semua kendaraan di jalan berwarna merah", "Semua kendaraan berwarna merah adalah mobil", "Sebagian kendaraan di jalan berwarna merah", "Tidak ada kendaraan di jalan yang berwarna merah"],
        correctAnswer: 2 // Sebagian kendaraan di jalan berwarna merah
    },
    {
        question: "Saya adalah sebuah angka yang jika kamu tambahkan dengan angka yang sama, hasilnya adalah angka itu sendiri. Siapakah saya?",
        options: ["0", "1", "2", "3"],
        correctAnswer: 0 // 0
    },
    {
        question: "Lima teman (Alan, Ben, Carl, Dan, Evan) duduk mengelilingi meja bundar. Alan duduk di sebelah Ben. Ben duduk di sebelah Carl. Carl tidak duduk di sebelah Dan. Dan duduk di sebelah Evan. Siapa yang duduk tepat di seberang Alan?",
        options: ["Ben", "Carl", "Dan", "Evan"],
        correctAnswer: 3
    },
    {
        question: "Seorang detektif memiliki tiga tersangka: Larry, Moe, dan Curly. Larry berkata, 'Moe berbohong.' Moe berkata, 'Curly yang melakukannya.' Curly berkata, 'Moe berbohong.' Jika hanya satu dari mereka yang mengatakan kebenaran, siapa yang melakukan kejahatan?",
        options: ["Larry", "Moe", "Curly"],
        correctAnswer: 1
    },
    {
        question: "Empat orang berdiri dalam antrean: John, Paul, George, dan Ringo. John tidak berada di depan. Paul berdiri tepat di belakang John. George berdiri tepat di belakang Paul. Ringo tidak berada di ujung. Siapa yang berdiri di depan?",
        options: ["John", "Paul", "George", "Ringo"],
        correctAnswer: 3
    },
    {
        question: "Di sebuah ruangan, ada empat orang: A, B, C, dan D. A berkata, 'B berbohong.' B berkata, 'C yang melakukannya.' C berkata, 'D berbohong.' D berkata, 'A berbohong.' Jika hanya satu dari mereka yang mengatakan kebenaran, siapa yang melakukan kejahatan?",
        options: ["A", "B", "C", "D"],
        correctAnswer: 2
    },
    {
        question: "Tiga orang duduk di meja: X, Y, dan Z. X berkata, 'Saya bukan Y.' Y berkata, 'Z bukan X.' Z berkata, 'X bukan Y.' Jika hanya satu dari mereka yang berbohong, siapa yang berbohong?",
        options: ["X", "Y", "Z"],
        correctAnswer: 0
    },
    {
        question: "Lima tersangka (A, B, C, D, E) sedang diinterogasi. A berkata, 'B berbohong.' B berkata, 'C yang melakukannya.' C berkata, 'D berbohong.' D berkata, 'E berbohong.' E berkata, 'A berbohong.' Jika hanya satu dari mereka yang mengatakan kebenaran, siapa yang melakukan kejahatan?",
        options: ["A", "B", "C", "D", "E"],
        correctAnswer: 1
    },
    {
        question: "Anda adalah seorang ahli psikologi forensik yang ditugaskan untuk menganalisis perilaku seorang tersangka dalam kasus pembunuhan yang rumit. Tersangka ini adalah seorang pemimpin politik yang sangat dihormati. Bukti fisik tidak cukup kuat untuk menentukan kesalahan. Anda memiliki dua opsi: meminta izin untuk mengakses catatan medis dan riwayat psikologis tersangka yang bisa mempengaruhi opini publik dan membatalkan kredibilitasnya, atau menunggu dan melanjutkan penyelidikan dengan risiko bukti fisik bisa hilang. Bagaimana pendekatan Anda dalam menangani situasi ini?",
        options: [
            "Meminta izin untuk mengakses catatan medis dan riwayat psikologis tersangka untuk mempengaruhi opini publik",
            "Melanjutkan penyelidikan dengan risiko bukti fisik bisa hilang",
            "Menyarankan otoritas untuk melakukan penangkapan langsung berdasarkan bukti fisik yang ada",
            "Mengumpulkan bukti tambahan dari saksi-saksi kunci dalam kasus ini",
            "Mengadakan konferensi pers untuk mengklarifikasi detail dari bukti fisik yang telah dikumpulkan"
        ],
        correctAnswer: 0 // Meminta izin untuk mengakses catatan medis dan riwayat psikologis tersangka untuk mempengaruhi opini publik
    },
    {
        question: "Sebagai seorang ilmuwan terkemuka dalam bidang teknologi AI, Anda menghadapi situasi di mana sistem AI yang Anda kembangkan diintegrasikan ke dalam kendaraan otonom untuk penggunaan komersial. Anda memiliki dua opsi: melanjutkan pengembangan untuk meningkatkan kecerdasan emosional dan sosial AI dengan potensi keuntungan besar tetapi risiko etika yang signifikan, atau membatasi fokus pada kecerdasan teknis dengan mengurangi dampak sosial dan etika. Bagaimana Anda akan memutuskan langkah berikutnya?",
        options: [
            "Melanjutkan pengembangan untuk meningkatkan kecerdasan emosional dan sosial AI dengan potensi keuntungan besar",
            "Membatasi fokus pada kecerdasan teknis dengan mengurangi dampak sosial dan etika",
            "Menghentikan pengembangan AI untuk mengevaluasi implikasi etika lebih lanjut",
            "Mengadakan konferensi ilmiah untuk membahas keberlanjutan AI di masa depan",
            "Mengumpulkan masukan dari komunitas ilmiah dan etika untuk mengarahkan pengembangan AI yang lebih baik"
        ],
        correctAnswer: 0 // Melanjutkan pengembangan untuk meningkatkan kecerdasan emosional dan sosial AI dengan potensi keuntungan besar
    },
    {
        question: "Anda adalah seorang ekonom yang ditugaskan untuk merancang kebijakan fiskal untuk menghadapi resesi ekonomi yang mendalam. Anda memiliki dua opsi: meluncurkan stimulus besar-besaran dengan risiko utang negara yang signifikan, atau menerapkan kebijakan penghematan yang ketat yang dapat memperburuk kondisi ekonomi jangka panjang tetapi menjaga kredibilitas keuangan negara. Bagaimana Anda akan menilai dan memilih kebijakan yang tepat?",
        options: [
            "Meluncurkan stimulus besar-besaran dengan risiko utang negara yang signifikan",
            "Menerapkan kebijakan penghematan yang ketat untuk menjaga kredibilitas keuangan negara",
            "Mencari bantuan finansial dari lembaga internasional untuk mengelola krisis ekonomi",
            "Mengadakan pertemuan dengan pemimpin industri untuk mendiskusikan langkah-langkah pemulihan ekonomi",
            "Mengumpulkan data ekonomi terbaru untuk memperkuat analisis kebijakan yang akurat"
        ],
        correctAnswer: 0 // Meluncurkan stimulus besar-besaran dengan risiko utang negara yang signifikan
    },
    {
        question: "Sebagai seorang arsitek terkenal, Anda diberikan tugas untuk merancang bangunan bersejarah yang harus mempertahankan nilai estetika dan keindahan arsitektur klasik tetapi juga harus memenuhi standar keberlanjutan dan efisiensi energi modern. Anda memiliki dua opsi: mengintegrasikan teknologi canggih untuk mencapai efisiensi energi tinggi tetapi mungkin mengorbankan nilai estetika, atau mempertahankan desain klasik yang indah tetapi dengan dampak lingkungan yang lebih besar. Bagaimana Anda akan menyeimbangkan pertimbangan ini dalam merancang bangunan tersebut?",
        options: [
            "Mengintegrasikan teknologi canggih untuk mencapai efisiensi energi tinggi",
            "Memilih mempertahankan desain klasik yang indah untuk memenuhi standar arsitektur bersejarah",
            "Mengadakan konsultasi dengan arsitek dan insinyur untuk mencari solusi terbaik yang memadukan kedua aspek",
            "Meninjau ulang desain bangunan untuk memasukkan elemen yang mempertimbangkan aspek keberlanjutan",
            "Mengorganisir konferensi internasional tentang arsitektur dan keberlanjutan untuk mencari solusi bersama"
        ],
        correctAnswer: 2 // Mengadakan konsultasi dengan arsitek dan insinyur untuk mencari solusi terbaik yang memadukan kedua aspek
    },
    {
        question: "Dalam sebuah simulasi bencana, Anda memiliki pilihan untuk menyelamatkan lima orang yang terjebak di bawah reruntuhan atau satu orang yang terperangkap di dalam mobil terbakar. Pilihan mana yang harus Anda ambil untuk memaksimalkan jumlah nyawa yang diselamatkan?",
        options: ["Lima orang di bawah reruntuhan", "Satu orang di dalam mobil terbakar", "Tidak menyelamatkan siapa pun", "Menyelamatkan kedua kelompok tersebut dengan bantuan tambahan", "Tergantung pada kondisi fisik dan keselamatan pribadi"],
        correctAnswer: 0 // Lima orang di bawah reruntuhan
    },
    {
        question: "Anda memimpin tim riset yang memiliki dua proyek penting: satu berpotensi untuk menghasilkan keuntungan besar tetapi dengan risiko tinggi, dan satu lagi yang lebih stabil tetapi tidak memiliki potensi keuntungan besar. Bagaimana Anda memilih proyek yang akan diberikan prioritas pertama?",
        options: ["Proyek berpotensi keuntungan besar dengan risiko tinggi", "Proyek stabil dengan potensi keuntungan kecil", "Keduanya diberikan prioritas yang sama", "Tidak memprioritaskan proyek manapun", "Mengkaji lebih lanjut mengenai kedua proyek"],
        correctAnswer: 1 // Proyek stabil dengan potensi keuntungan kecil
    },
    {
        question: "Anda diberi kesempatan untuk memilih antara menerima pekerjaan yang menjanjikan gaji tinggi tetapi dengan tekanan kerja yang besar, atau pekerjaan dengan gaji yang lebih rendah tetapi lingkungan kerja yang lebih nyaman. Mana yang akan Anda pilih dan mengapa?",
        options: ["Pekerjaan dengan gaji tinggi dan tekanan kerja besar", "Pekerjaan dengan gaji rendah dan lingkungan kerja nyaman", "Meminta penawaran pekerjaan yang berbeda", "Menimbang kembali opsi pekerjaan", "Konsultasi dengan orang terdekat"],
        correctAnswer: 1 // Pekerjaan dengan gaji rendah dan lingkungan kerja nyaman
    },
    {
        question: "Anda bertaruh dalam permainan kartu di mana Anda memiliki dua pilihan: satu kartu memiliki peluang menang yang tinggi tetapi hadiah kecil, sedangkan kartu lainnya memiliki peluang menang rendah tetapi hadiah besar. Bagaimana strategi yang Anda pilih untuk bermain?",
        options: ["Memilih kartu dengan peluang menang tinggi dan hadiah kecil", "Memilih kartu dengan peluang menang rendah dan hadiah besar", "Tidak bertaruh", "Menunggu peluang yang lebih baik", "Mengurangi risiko dengan tidak bertaruh"],
        correctAnswer: 1 // Memilih kartu dengan peluang menang rendah dan hadiah besar
    },
    {
        question: "Anda dihadapkan pada dua pilihan: satu adalah menerima tawaran pekerjaan di luar negeri dengan gaji tinggi tetapi jauh dari keluarga, dan satu lagi adalah pekerjaan lokal dengan gaji yang cukup dan dekat dengan keluarga. Bagaimana Anda mengambil keputusan ini?",
        options: ["Menerima tawaran pekerjaan di luar negeri dengan gaji tinggi", "Menerima pekerjaan lokal dengan gaji cukup", "Tidak menerima tawaran pekerjaan mana pun", "Meminta saran dari ahli karier", "Mencari tahu tentang lebih banyak opsi pekerjaan"],
        correctAnswer: 1 // Menerima pekerjaan lokal dengan gaji cukup
    },
    {
        question: "Empat tersangka (W, X, Y, Z) sedang diinterogasi. W berkata, 'X yang melakukannya.' X berkata, 'Y yang melakukannya.' Y berkata, 'Z yang melakukannya.' Z berkata, 'W berbohong.' Jika hanya satu dari mereka yang mengatakan kebenaran, siapa yang melakukan kejahatan?",
        options: ["W", "X", "Y", "Z"],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let attempts = 0;

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
    
    document.getElementById("submit-btn").addEventListener("click", submitAnswer);

    // Check localStorage for saved progress
    const savedIndex = localStorage.getItem("currentQuestionIndex");
    const savedAttempts = localStorage.getItem("attempts");

    if (savedIndex !== null && savedAttempts !== null) {
        currentQuestionIndex = parseInt(savedIndex);
        attempts = parseInt(savedAttempts);
        loadQuestion();
    }
});

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const attemptsContainer = document.getElementById("attempts-container");
    const resultContainer = document.getElementById("result");
    const loadingText = document.getElementById("loading");

    questionContainer.innerHTML = `
        <h2>${questions[currentQuestionIndex].question}</h2>
        ${questions[currentQuestionIndex].options.map((option, index) => `
            <label>
                <input type="radio" name="option" value="${index}">
                ${option}
            </label>
        `).join('<br>')}
    `;

    attemptsContainer.textContent = `Attempts: ${attempts}`;
    resultContainer.classList.add("hidden");
    loadingText.classList.add("hidden");
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    const resultContainer = document.getElementById("result");

    if (selectedOption) {
        const answerIndex = parseInt(selectedOption.value);
        if (answerIndex === questions[currentQuestionIndex].correctAnswer) {
            resultContainer.textContent = "Selamat, jawaban Anda benar!";
            resultContainer.classList.remove("hidden");
            setTimeout(() => {
                resultContainer.classList.add("hidden");
            }, 1000); // Tampilkan pesan selama 1 detik

            // Lanjut ke soal berikutnya
            setTimeout(() => {
                currentQuestionIndex++;
                attempts = 0; // Reset attempts setelah jawaban benar
                if (currentQuestionIndex >= questions.length) {
                    alert("Anda telah menyelesaikan kuis!");
                    currentQuestionIndex = 0;
                    localStorage.removeItem("currentQuestionIndex");
                    localStorage.removeItem("attempts");
                }
                loadQuestion();
            }, 1000); // Tunggu 1 detik sebelum pindah ke soal berikutnya
        } else {
            attempts++;
            if (attempts >= 3) { // Perubahan di sini untuk 3 kali salah
                alert("Anda telah menjawab salah tiga kali. Kembali ke soal pertama.");
                currentQuestionIndex = 0;
                attempts = 0;
                loadQuestion();
            } else {
                resultContainer.textContent = "Anda salah, coba lagi.";
                resultContainer.classList.remove("hidden");
                setTimeout(() => {
                    resultContainer.classList.add("hidden");
                }, 1000); // Sembunyikan pesan setelah 1 detik
            }
        }
    } else {
        alert("Silakan pilih sebuah opsi.");
    }

    // Save current progress to localStorage
    localStorage.setItem("currentQuestionIndex", currentQuestionIndex.toString());
    localStorage.setItem("attempts", attempts.toString());
}

// Handle refreshing the page to retain the current question
window.addEventListener('beforeunload', () => {
    localStorage.setItem("currentQuestionIndex", currentQuestionIndex.toString());
    localStorage.setItem("attempts", attempts.toString());
});