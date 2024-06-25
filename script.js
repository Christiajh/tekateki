const questions = [
    {
        question: "Empat orang duduk dalam satu barisan. Alice tidak duduk di ujung mana pun. Bob duduk di sebelah kanan Alice tetapi tidak harus di sebelahnya. Claire duduk di sebelah kiri Bob. David duduk di salah satu ujung. Siapa yang mungkin duduk di ujung lainnya?",
        options: [
            "Alice",
            "Bob",
            "Claire",
            "David",
            "Evelyn",
            "Tidak ada yang duduk di ujung lainnya"
        ],
        correctAnswer: 4 // Evelyn
    },
    {
        "question": "Sebuah kelompok terdiri dari 6 orang: A, B, C, D, E, dan F. Mereka duduk mengelilingi sebuah meja bulat. Informasi yang diketahui adalah: A tidak bersebelahan dengan B. Di antara A dan D terdapat tepat satu orang. Di mana A bisa duduk?",
        "options": [
            "Di antara B dan C",
            "Di antara D dan F",
            "Di antara E dan F",
            "Di antara C dan E",
            "Tidak dapat ditentukan",
            "Informasi tidak mencukupi"
        ],
        "correctAnswer": 3 // Di antara C dan E
    },{
        "question": "Seorang peneliti mengumpulkan data tentang kebiasaan makan sekelompok orang. Dia menemukan bahwa 30% dari orang-orang itu makan steak, 20% makan sushi, dan 10% makan keduanya. Berapa persen dari kelompok tersebut yang tidak makan sushi?",
        "options": [
            "50%",
            "60%",
            "70%",
            "80%",
            "Tidak dapat ditentukan",
            "Informasi tidak mencukupi"
        ],
        "correctAnswer": 2 // 70%
    },{
        "question": "Sebuah tim bermain dalam turnamen sepak bola. Mereka memenangkan 2 pertandingan, seri 3 pertandingan, dan kalah 1 pertandingan. Berapa total poin yang mereka peroleh jika setiap kemenangan memberi 3 poin, seri memberi 1 poin, dan kekalahan memberi 0 poin?",
        "options": [
            "5 poin",
            "7 poin",
            "9 poin",
            "11 poin",
            "Tidak dapat ditentukan",
            "Informasi tidak mencukupi"
        ],
        "correctAnswer": 3 // 9 poin
    }
    ,{
        "question": "Sebuah kotak berisi 5 bola merah, 3 bola biru, dan 2 bola hijau. Jika satu bola diambil secara acak dari kotak tanpa penggantian, apa probabilitasnya bola tersebut tidak merah?",
        "options": [
            "2/5",
            "3/5",
            "4/5",
            "7/10",
            "Tidak dapat ditentukan",
            "Informasi tidak mencukupi"
        ],
        "correctAnswer": 1 // 3/5
    }
,{
    "question": "Seorang fotografer ingin membagi foto-foto pernikahan yang diambilnya kepada dua pasangan pengantin dengan adil. Jika dia memiliki 60 foto, berapa banyak foto yang akan dia berikan kepada setiap pasangan?",
    "options": [
        "20 foto",
        "25 foto",
        "30 foto",
        "35 foto",
        "Tidak dapat ditentukan",
        "Informasi tidak mencukupi"
    ],
    "correctAnswer": 0 // 20 foto
}
,{
    "question": "Sebuah bus menuju dari A ke B dan kembali lagi dari B ke A dengan kecepatan rata-rata 60 km/jam. Jika bus berangkat dari A ke B pada pukul 10 pagi dan kembali dari B ke A pada pukul 2 sore pada hari yang sama, berapa jam yang dibutuhkan bus untuk perjalanan pulang pergi?",
    "options": [
        "4 jam",
        "5 jam",
        "6 jam",
        "7 jam",
        "Tidak dapat ditentukan",
        "Informasi tidak mencukupi"
    ],
    "correctAnswer": 1 // 5 jam
}
,{
    "question": "Sebuah toko buku menjual 3 buku fiksi, 2 buku nonfiksi, dan 1 buku referensi. Jika seorang pembeli memilih 2 buku secara acak dari toko tersebut, berapa banyak cara yang mungkin untuk memilih buku-buku tersebut?",
    "options": [
        "5 cara",
        "6 cara",
        "8 cara",
        "10 cara",
        "Tidak dapat ditentukan",
        "Informasi tidak mencukupi"
    ],
    "correctAnswer": 2 // 6 cara
}
,{
    "question": "Sebuah kotak berisi 6 kelereng merah, 4 kelereng biru, dan 2 kelereng hijau. Jika satu kelereng diambil secara acak dari kotak, berapa peluangnya kelereng tersebut tidak biru?",
    "options": [
        "1/3",
        "1/2",
        "2/3",
        "3/4",
        "Tidak dapat ditentukan",
        "Informasi tidak mencukupi"
    ],
    "correctAnswer": 0 // 1/3
}
,{
    "question": "Seorang ahli matematika memiliki 7 buku matematika, 5 buku fisika, dan 3 buku kimia. Jika dia memilih 3 buku acak dari koleksinya, berapa banyak cara yang mungkin untuk memilih kombinasi buku-buku tersebut?",
    "options": [
        "70 cara",
        "105 cara",
        "140 cara",
        "175 cara",
        "Tidak dapat ditentukan",
        "Informasi tidak mencukupi"
    ],
    "correctAnswer": 1 // 105 cara
}
,{
    "question": "Sebuah perusahaan memiliki 100 karyawan. Jika 60% dari karyawan adalah pria, berapa jumlah pria di perusahaan tersebut?",
    "options": [
        "50 pria",
        "60 pria",
        "70 pria",
        "80 pria",
        "Tidak dapat ditentukan",
        "Informasi tidak mencukupi"
    ],
    "correctAnswer": 2 // 60 pria
}
,{
    "question": "Sebuah kapal sedang berlayar dari A ke B dengan kecepatan rata-rata 20 km/jam. Jika perjalanan pulang pergi memakan waktu total 10 jam, berapa jarak tempuh dari A ke B?",
    "options": [
        "100 km",
        "200 km",
        "300 km",
        "400 km",
        "Tidak dapat ditentukan",
        "Informasi tidak mencukupi"
    ],
    "correctAnswer": 1 // 200 km
}
,{
    "question": "Sebuah taman bermain memiliki 4 jenis permainan: ayunan, perosotan, jungkat-jungkit, dan taman bermain air. Jika setiap anak harus memilih dua jenis permainan yang berbeda, berapa banyak cara yang mungkin untuk memilih kombinasi permainan?",
    "options": [
        "6 cara",
        "8 cara",
        "10 cara",
        "12 cara",
        "Tidak dapat ditentukan",
        "Informasi tidak mencukupi"
    ],
    "correctAnswer": 3 // 12 cara
}
,{
    "question": "Seorang penjual baju memiliki 8 kemeja lengan panjang, 6 kemeja lengan pendek, dan 4 kemeja polo. Jika seorang pembeli memilih 2 kemeja secara acak, berapa banyak cara yang mungkin untuk memilih kombinasi kemeja?",
    "options": [
        "30 cara",
        "40 cara",
        "50 cara",
        "60 cara",
        "Tidak dapat ditentukan",
        "Informasi tidak mencukupi"
    ],
    "correctAnswer": 1 // 40 cara
}
,{
    "question": "Sebuah kantong berisi 5 bola merah, 3 bola biru, dan 2 bola hijau. Jika dua bola diambil secara acak tanpa penggantian, berapa peluangnya kedua bola tersebut memiliki warna yang sama?",
    "options": [
        "1/5",
        "2/5",
        "1/3",
        "2/3",
        "Tidak dapat ditentukan",
        "Informasi tidak mencukupi"
    ],
    "correctAnswer": 2 // 1/3
}
,{
    "question": "Sebuah tim olahraga memenangkan 5 pertandingan, seri 3 pertandingan, dan kalah 2 pertandingan. Jika setiap kemenangan memberi 2 poin, seri memberi 1 poin, dan kekalahan memberi 0 poin, berapa total poin yang mereka peroleh?",
    "options": [
        "10 poin",
        "12 poin",
        "14 poin",
        "16 poin",
        "Tidak dapat ditentukan",
        "Informasi tidak mencukupi"
    ],
    "correctAnswer": 1 // 12 poin
}
,{
    "question": "Sebuah kotak berisi 7 kelereng merah, 5 kelereng biru, dan 3 kelereng hijau. Jika dua kelereng diambil secara acak dari kotak, berapa peluangnya kedua kelereng tersebut berbeda warna?",
    "options": [
        "1/5",
        "2/5",
        "1/3",
        "2/3",
        "Tidak dapat ditentukan",
        "Informasi tidak mencukupi"
    ],
    "correctAnswer": 3 // 2/3
}
,{
    "question": "Seorang peneliti mengumpulkan data tentang kegemaran musik sekelompok orang. Dia menemukan bahwa 40% dari mereka menyukai pop, 30% menyukai rock, dan 20% menyukai keduanya. Berapa persen dari kelompok tersebut yang tidak menyukai rock?",
    "options": [
        "30%",
        "40%",
        "50%",
        "60%",
        "Tidak dapat ditentukan",
        "Informasi tidak mencukupi"
    ],
    "correctAnswer": 2 // 50%
}
,{
    "question": "Seorang petani memiliki 60 ekor ternak di peternakannya. Jika 75% dari ternaknya adalah sapi, berapa jumlah sapi di peternakan tersebut?",
    "options": [
        "40 sapi",
        "45 sapi",
        "50 sapi",
        "55 sapi",
        "Tidak dapat ditentukan",
        "Informasi tidak mencukupi"
    ],
    "correctAnswer": 1 // 45 sapi
}
,{
    "question": "Sebuah sekolah memiliki 5 kelas dengan masing-masing 30 siswa. Jika 25% dari siswa di sekolah tersebut adalah perempuan, berapa jumlah siswa perempuan di sekolah tersebut?",
    "options": [
        "150 siswa",
        "175 siswa",
        "200 siswa",
        "225 siswa",
        "Tidak dapat ditentukan",
        "Informasi tidak mencukupi"
    ],
    "correctAnswer": 2 // 200 siswa
}
,{
    "question": "Seorang pelatih memiliki tim bola basket dengan 12 pemain. Jika 60% dari pemainnya adalah putra, berapa jumlah putra di tim tersebut?",
    "options": [
        "6 putra",
        "7 putra",
        "8 putra",
        "9 putra",
        "Tidak dapat ditentukan",
        "Informasi tidak mencukupi"
    ],
    "correctAnswer": 1 // 7 putra
}              
    ,
    {
        question: "Pilih antara menggunakan metode terbukti yang memakan waktu lama atau strategi yang menjanjikan hasil cepat dengan risiko kegagalan tinggi. Pilihan Anda?",
        options: [
            "Metode terbukti untuk keamanan",
            "Strategi cepat untuk efisiensi",
            "Gabungkan kedua strategi untuk risiko terkendali",
            "Tunda evaluasi untuk keputusan lebih matang",
            "Minta masukan untuk strategi yang tepat",
            "Tidak memilih, cari strategi alternatif"
        ],
        correctAnswer: 4 // Tidak memilih, cari strategi alternatif
    }
     ,
    {
        question: "Pilih antara menyelamatkan lima orang yang terjebak di bawah reruntuhan atau satu orang yang terperangkap di dalam mobil terbakar. Pilihan Anda?",
        options: [
            "Menyelamatkan lima orang di bawah reruntuhan",
            "Menyelamatkan satu orang di dalam mobil terbakar",
            "Tidak menyelamatkan siapa pun",
            "Berpikir berdasarkan intuisi",
            "Tidak melakukan tindakan apa pun",
            "Memilih berdasarkan undian dadu"
        ],
        correctAnswer: 4 // Tidak melakukan tindakan apa pun
    }
    
    ,
    {
        question: "Pilih antara proyek berisiko tinggi dengan potensi keuntungan besar atau proyek stabil dengan keuntungan kecil. Pilihan Anda?",
        options: [
            "Proyek berisiko tinggi, keuntungan besar",
            "Proyek stabil, keuntungan kecil",
            "Kaji lebih lanjut kedua proyek",
            "Tidak prioritaskan proyek manapun",
            "Perhatikan lebih pada proyek stabil",
            "Rencana baru gabungan kedua proyek"
        ],
        correctAnswer: 5 // Rencana baru gabungan kedua proyek
    }    
    ,
    {
        question: "Pilih antara pekerjaan dengan gaji tinggi dan tekanan besar, atau pekerjaan dengan gaji rendah dan lingkungan nyaman. Pilihan Anda?",
        options: [
            "Gaji tinggi dengan tekanan besar",
            "Gaji rendah dengan lingkungan nyaman",
            "Cari lebih banyak opsi pekerjaan",
            "Tidak menerima tawaran pekerjaan",
            "Ambil gaji tinggi untuk pengalaman",
            "Pertimbangkan keseimbangan antara gaji dan lingkungan"
        ],
        correctAnswer: 1 // Gaji rendah dengan lingkungan nyaman
    }
    ,
    {
        question: "Saya adalah angka lebih dari 10 tapi kurang dari 20, ganjil, dan jumlah digit saya adalah 8. Siapakah saya?",
        options: [
            "11",
            "13",
            "15",
            "17",
            "19",
            "Saya tidak ada di pilihan ini"
        ],
        correctAnswer: 5 // Saya tidak ada di pilihan ini
    }
    ,
    {
        question: "Dalam investigasi kejahatan, empat tersangka saling menuduh. Alex: 'Blake yang melakukannya.' Blake: 'Chris yang melakukannya.' Chris: 'Blake berbohong.' Drew: 'Alex berbohong.' Siapa yang sebenarnya melakukan kejahatan?",
        options: [
            "Alex",
            "Blake",
            "Chris",
            "Drew",
            "Tidak ada yang mengatakan kebenaran",
            "Semua mereka berbohong"
        ],
        correctAnswer: 4 // Tidak ada yang mengatakan kebenaran
    }
    ,
    {
        question: "Benda ini memiliki empat kaki dan digunakan untuk makan atau bekerja. Siapakah saya?",
        options: [
            "Kursi",
            "Meja",
            "Lemari",
            "Ranjang",
            "Baki",
            "Rak"
        ],
        correctAnswer: 4 // Baki
    }
    ,
    {
        question: "Jika semua siswa di kelas memegang buku, dan sebagian dari mereka juga memegang pena, mana yang benar?",
        options: [
            "Semua siswa memegang buku dan pena",
            "Sebagian siswa memegang buku dan pena",
            "Tidak ada siswa yang memegang pena",
            "Semua siswa hanya memegang buku",
            "Semua siswa memegang pena, tapi tidak ada yang memegang buku",
            "Sebagian siswa hanya memegang pena"
        ],
        correctAnswer: 1 // Sebagian siswa memegang buku dan pena
    }
    ,
    {
        question: "Saya memiliki kunci tetapi tidak memiliki pintu. Saya dapat membuka sesuatu tetapi tidak bisa masuk. Siapakah saya?",
        options: [
            "Kunci rumah",
            "Kunci mobil",
            "Kunci jawaban",
            "Kunci keyboard",
            "Kunci koper",
            "Kunci ingatan"
        ],
        correctAnswer: 2 // Kunci jawaban
    }
    ,
    {
        question: "Jika sebagian besar anggota klub adalah pelajar, dan semua pelajar adalah anggota perpustakaan, mana yang benar?",
        options: [
            "Semua anggota klub adalah anggota perpustakaan",
            "Semua anggota perpustakaan adalah anggota klub",
            "Sebagian anggota klub adalah anggota perpustakaan",
            "Sebagian anggota perpustakaan adalah anggota klub",
            "Semua anggota klub adalah pelajar",
            "Semua anggota perpustakaan adalah pelajar"
        ],
        correctAnswer: 0 // Semua anggota klub adalah anggota perpustakaan
    }
    ,
    {
        question: "Dua peluru ditembakkan pada waktu yang sama dari senjata yang berbeda, dengan kecepatan yang sama. Anehnya, peluru pertama jatuh ke tanah lebih cepat daripada peluru kedua. Mengapa hal ini bisa terjadi?",
        options: [
            "Peluru pertama lebih berat daripada peluru kedua",
            "Peluru kedua mengalami gesekan udara yang lebih sedikit",
            "Senjata pertama ditembakkan dari ketinggian yang lebih rendah",
            "Peluru pertama mengalami hambatan udara yang lebih besar",
            "Peluru kedua ditembakkan dengan sudut yang lebih tinggi",
            "Angin bertiup lebih kencang pada saat peluru pertama ditembakkan"
        ],
        correctAnswer: 3 // Peluru pertama mengalami hambatan udara yang lebih besar
    }    
    ,
    {
        question: "Sebagai pengusaha sukses, Anda dihadapkan pada pilihan: memperluas bisnis ke pasar internasional dengan potensi pertumbuhan besar namun risiko keuangan tinggi, atau mempertahankan operasi domestik yang stabil namun pertumbuhan terbatas. Bagaimana langkah terbaik untuk bisnis Anda?",
        options: [
            "Memperluas bisnis ke pasar internasional untuk mengambil keuntungan dari potensi pertumbuhan besar",
            "Mempertahankan operasi domestik untuk menghindari risiko keuangan tinggi di pasar internasional",
            "Melakukan studi pasar untuk memastikan langkah ekspansi internasional sesuai",
            "Mengalokasikan sumber daya untuk inovasi produk di pasar domestik",
            "Bentuk kemitraan strategis dengan perusahaan lokal untuk memperkuat posisi di pasar domestik",
            "Teliti peluang diversifikasi produk di pasar domestik"
        ],
        correctAnswer: 0 // Memperluas bisnis ke pasar internasional untuk mengambil keuntungan dari potensi pertumbuhan yang lebih besar
    }
    
    ,
    {
        question: "Anda adalah seorang peneliti senior pada proyek vaksin baru. Anda memiliki pilihan: melanjutkan dengan lebih banyak sumber daya untuk pengembangan vaksin, atau mengalihkan fokus ke riset alternatif yang berpotensi lebih menguntungkan. Bagaimana langkah Anda?",
        options: [
            "Melanjutkan dengan lebih banyak sumber daya untuk pengembangan vaksin baru",
            "Mengalihkan sumber daya ke riset alternatif yang berpotensi lebih menguntungkan",
            "Mengajukan proposal dana tambahan untuk proyek vaksin baru",
            "Mengadakan evaluasi hasil penelitian dengan tim",
            "Menyusun laporan riset untuk badan pengawas ilmiah",
            "Investasi dalam infrastruktur laboratorium"
        ],
        correctAnswer: 0 // Melanjutkan dengan lebih banyak sumber daya untuk pengembangan vaksin baru
    }
    ,
    {
        question: "Sebagai arsitek terkemuka, Anda merancang bangunan pencakar langit ikonik di pusat kota. Pilihan Anda: desain estetika dengan tantangan teknis besar, atau desain fungsional yang cepat dibangun namun kurang inovatif. Bagaimana Anda memilih solusi yang tepat?",
        options: [
            "Desain estetika dengan tantangan teknis besar",
            "Desain fungsional dan cepat untuk kebutuhan praktis",
            "Kolaborasi untuk menggabungkan estetika dan fungsionalitas optimal",
            "Pertemuan untuk menetapkan prioritas desain bersama pemangku kepentingan",
            "Evaluasi dampak jangka panjang dari kedua opsi desain",
            "Inspirasi dari pencakar langit global"
        ],
        correctAnswer: 2 // Kolaborasi untuk menggabungkan estetika dan fungsionalitas optimal
    }
    ,
    {
        question: "Di laboratorium penelitian, hanya beberapa ilmuwan memiliki akses ke perangkat eksperimen tertentu. Ilmuwan dengan akses ke perangkat eksperimen juga memiliki latar belakang pendidikan dalam fisika kuantum. Mana yang pasti benar?",
        options: [
            "Semua ilmuwan di laboratorium memiliki latar belakang pendidikan dalam fisika kuantum",
            "Semua ilmuwan dengan latar belakang pendidikan dalam fisika kuantum memiliki akses ke perangkat eksperimen tertentu",
            "Beberapa ilmuwan memiliki akses ke perangkat eksperimen tertentu",
            "Tidak ada ilmuwan di laboratorium yang memiliki latar belakang pendidikan dalam fisika kuantum",
            "Ilmuwan tanpa latar belakang pendidikan dalam fisika kuantum juga dapat mengakses perangkat eksperimen",
            "Semua ilmuwan di laboratorium memiliki akses ke semua perangkat eksperimen"
        ],
        correctAnswer: 2 // Beberapa ilmuwan memiliki akses ke perangkat eksperimen tertentu
    }
    ,
    {
        question: "Selalu di depanmu, tak terlihat. Datang setiap hari, tak pernah tinggal. Siapakah aku?",
        options: [
            "Masa depan",
            "Waktu",
            "Ketidaksadaran",
            "Pemikiran",
            "Impian",
            "Harapan"
        ],
        correctAnswer: 0 // Masa depan
    }
    ,
    {
        question: "Jika sebagian dari tanaman di kebun adalah bunga, dan semua bunga adalah tanaman, mana yang benar?",
        options: [
            "Semua tanaman di kebun adalah bunga",
            "Semua bunga adalah tanaman di kebun",
            "Beberapa bunga di kebun adalah tanaman",
            "Tidak ada tanaman di kebun yang bukan bunga",
            "Beberapa bunga di kebun tidak ada yang adalah tanaman",
            "Tidak semua tanaman di kebun adalah bunga"
        ],
        correctAnswer: 2 // Beberapa bunga di kebun adalah tanaman
    }
    ,
    {
        question: "Saya memiliki ekor, tapi bukan hewan. Saya memiliki sayap, tapi bukan burung. Saya bisa terbang, tapi bukan pesawat. Siapakah saya?",
        options: [
            "Naga",
            "Kupu-kupu",
            "Layangan",
            "Helikopter",
            "Paraglider",
            "Terumbu karang"
        ],
        correctAnswer: 2 // Layangan
    }
    ,
    {
        question: "Jika semua burung bisa terbang, dan sebagian hewan di kebun binatang adalah burung, mana yang bisa dikatakan dengan pasti?",
        options: [
            "Setiap hewan di kebun binatang bisa terbang",
            "Hanya sebagian hewan di kebun binatang bisa terbang",
            "Tidak satupun hewan di kebun binatang yang bisa terbang",
            "Setiap burung di kebun binatang bisa terbang",
            "Hanya beberapa burung di kebun binatang yang bisa terbang",
            "Tidak ada hewan di kebun binatang yang bisa terbang kecuali burung"
        ],
        correctAnswer: 3 // Setiap burung di kebun binatang bisa terbang
    }
    ,
    {
        question: "Saya adalah sebuah kata yang sama jika dibaca dari depan atau belakang. Saya bisa berarti tempat tinggal. Siapakah saya?",
        options: [
            "Kasur",
            "Gubug",
            "Kamar",
            "Rumah",
            "Tempat",
            "Resor"
        ],
        correctAnswer: 0 // Kasur
    }
    ,
    {
        question: "Jika semua buku di rak adalah novel, dan sebagian dari novel itu adalah fiksi, maka mana yang benar?",
        options: [
            "Semua novel di rak adalah buku fiksi",
            "Semua buku fiksi adalah novel di rak",
            "Beberapa novel adalah buku fiksi",
            "Tidak ada novel yang merupakan buku fiksi",
            "Semua buku di rak adalah novel fiksi",
            "Beberapa buku fiksi adalah novel"
        ],
        correctAnswer: 5 // Beberapa buku fiksi adalah novel
    }
    ,
    {
        question: "Saya adalah sebuah kata lima huruf. Jika kamu menghilangkan dua huruf terakhir, namun bunyiku tetap sama. Siapakah saya?",
        options: [
            "Pesawat",
            "Pisau",
            "Perahu",
            "Pulau",
            "Pemandu",
            "Perawan"
        ],
        correctAnswer: 4 // Pemandu
    }
    ,
    {
        question: "Di tengah perang saudara, sebagai pemimpin pasukan, Anda memilih strategi mana?",
        options: [
            "Serangan besar-besaran untuk menguasai ibu kota musuh",
            "Operasi gerilya untuk mengganggu pasokan musuh",
            "Membentuk aliansi dengan faksi musuh untuk mengurangi konflik",
            "Memilih untuk tidak bertindak militer",
            "Meninjau ulang strategi berdasarkan intelijen terbaru",
            "Mengatur perangkap untuk membingungkan musuh"
        ],
        correctAnswer: 1 // Operasi gerilya untuk mengganggu pasokan musuh
    }
    
    ,
    {
        question: "Anda menemukan dua situs kuno: satu berbahaya dengan potensi besar, satu lagi aman dengan potensi kecil. Bagaimana Anda memilih untuk mengalokasikan sumber daya penelitian Anda?",
        options: [
            "Eksplorasi situs berbahaya dengan risiko tinggi",
            "Eksplorasi situs aman dengan penemuan terbatas",
            "Alokasikan sumber daya secara merata untuk kedua situs",
            "Sewa tim untuk penilaian mendalam",
            "Minta bantuan otoritas setempat untuk penilaian risiko",
            "Tidak alokasikan sumber daya untuk eksplorasi"
        ],
        correctAnswer: 0 // Eksplorasi situs berbahaya dengan risiko tinggi
    }
    
    
    ,
    {
        question: "Sebagai manajer proyek, Anda menghadapi pilihan antara dua proyek besar. Mana yang Anda prioritaskan?",
        options: [
            "Membangun jembatan antarkota yang penting",
            "Membangun sistem irigasi untuk wilayah pedesaan",
            "Menghentikan proyek dan mencari alternatif baru",
            "Mencari pendanaan tambahan untuk kedua proyek",
            "Mengevaluasi dampak jangka panjang dari masing-masing proyek",
            "Mengubah ruang lingkup kedua proyek untuk mengurangi biaya"
        ],
        correctAnswer: 0 // Membangun jembatan antarkota yang penting
    }
    ,
    {
        question: "Anda, sebagai kapten kapal selam, terjebak di perairan musuh. Bagaimana langkah terbaik yang akan Anda ambil?",
        options: [
            "Coba melarikan diri dengan risiko terdeteksi",
            "Tetap bersembunyi dan menunggu bantuan",
            "Hancurkan kapal untuk menghindari penangkapan",
            "Kirim sinyal darurat untuk bantuan segera",
            "Lakukan perundingan dengan musuh untuk menyelesaikan krisis",
            "Evaluasi kemungkinan risiko untuk memilih langkah terbaik"
        ],
        correctAnswer: 1 // Tetap bersembunyi dan menunggu bantuan
    }
    ,
    {
        question: "Sesuatu yang bisa kamu tulis tanpa tinta dan baca tanpa kertas adalah?",
        options: [
            "Komputer",
            "Papan tulis digital",
            "Cermin",
            "Buku elektronik",
            "Layar sentuh",
            "Proyektor"
        ],
        correctAnswer: 3 // Buku elektronik
    }
    ,
    {
        question: "Sebagian kendaraan di jalan berwarna merah. Mana yang benar?",
        options: [
            "Semua kendaraan di jalan berwarna merah",
            "Semua kendaraan berwarna merah adalah mobil",
            "Sebagian kendaraan di jalan berwarna merah",
            "Tidak ada kendaraan di jalan yang berwarna merah",
            "Semua mobil di jalan berwarna merah",
            "Semua kendaraan berwarna merah adalah mobil"
        ],
        correctAnswer: 2 // Sebagian kendaraan di jalan berwarna merah
    }
    ,
    {
        question: "Saya adalah angka yang jika ditambahkan dengan angka yang sama, hasilnya adalah angka itu sendiri. Siapakah saya?",
        options: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5"
        ],
        correctAnswer: 0 // 0
    }
    ,
    {
        question: "Alan duduk di sebelah Ben. Ben di sebelah Carl. Carl tidak bersebelahan dengan Dan. Dan di sebelah Evan. Siapa yang duduk tepat di seberang Alan?",
        options: [
            "Ben",
            "Carl",
            "Dan",
            "Evan",
            "Alan",
            "Tidak ada yang berseberangan dengan Alan"
        ],
        correctAnswer: 3 // Evan
    }
    ,
    {
        question: "Detektif memiliki tiga tersangka: Larry, Moe, dan Curly. Larry berkata, 'Moe berbohong.' Moe berkata, 'Curly yang melakukannya.' Curly berkata, 'Moe berbohong.' Siapa yang melakukan kejahatan?",
        options: [
            "Larry mengatakan kebenaran",
            "Moe mengatakan kebenaran",
            "Curly mengatakan kebenaran",
            "Larry berbohong",
            "Moe berbohong",
            "Curly berbohong"
        ],
        correctAnswer: 1 // Moe
    }
    ,
    {
        question: "Empat orang berdiri dalam antrean: John, Paul, George, dan Ringo. John tidak berada di depan. Paul berdiri tepat di belakang John. George berdiri tepat di belakang Paul. Ringo tidak berada di ujung. Siapa yang berdiri di depan?",
        options: [
            "John",
            "Paul",
            "George",
            "Ringo",
            "Tidak dapat diketahui dari informasi yang diberikan",
            "Semua jawaban salah"
        ],
        correctAnswer: 3 // Ringo
    }
    ,
    {
        question: "Di sebuah ruangan, ada empat orang: A, B, C, dan D. A berkata, 'B berbohong.' B berkata, 'C yang melakukannya.' C berkata, 'D berbohong.' D berkata, 'A berbohong.' Jika hanya satu dari mereka yang mengatakan kebenaran, siapa yang melakukan kejahatan?",
        options: [
            "A",
            "B",
            "C",
            "D",
            "Semua mereka berbohong",
            "Tidak dapat dipastikan dari informasi yang diberikan"
        ],
        correctAnswer: 2 // C
    }
    ,
    {
        question: "Di sebuah kota, ada lima sahabat: P, Q, R, S, dan T. Mereka masing-masing memiliki hewan peliharaan yang berbeda: kucing, anjing, burung, kelinci, dan hamster. Mereka membuat pernyataan sebagai berikut:",
        options: [
            "P mengatakan, 'Q memiliki kucing.'",
            "Q mengatakan, 'R memiliki anjing.'",
            "R mengatakan, 'S memiliki burung.'",
            "S mengatakan, 'T memiliki kelinci.'",
            "T mengatakan, 'P memiliki hamster.'",
            "Semua pernyataan mereka salah"
        ],
        correctAnswer: 3 // S memiliki burung
    }
    
    ,
    {
        question: "Lima tersangka (A, B, C, D, E) sedang diinterogasi. Pernyataan mereka adalah:",
        options: [
            "A mengatakan, 'B berbohong.'",
            "B mengatakan, 'C yang melakukannya.'",
            "C mengatakan, 'D berbohong.'",
            "D mengatakan, 'E berbohong.'",
            "E mengatakan, 'A berbohong.'",
            "Pernyataan mereka saling bertentangan"
        ],
        correctAnswer: 1 // B
    }
    ,
    {
        question: "Lima tersangka (A, B, C, D, E) sedang diinterogasi. Pernyataan mereka adalah:",
        options: [
            "A mengatakan, 'B pasti tidak berbohong.'",
            "B mengatakan, 'C tidak melakukan kejahatan.'",
            "C mengatakan, 'D pasti berbohong.'",
            "D mengatakan, 'E yang melakukannya.'",
            "E mengatakan, 'A tidak terlibat.'",
            "Tidak ada yang jujur di antara mereka."
        ],
        correctAnswer: 2 // C
    }    
    ,
    {
        "question": "Sebagai ilmuwan AI terkemuka, Anda menghadapi pilihan sulit dalam mengembangkan sistem AI untuk kendaraan otonom komersial. Bagaimana Anda memilih langkah berikutnya?",
        "options": [
            "Mengembangkan kecerdasan emosional dan sosial AI dengan potensi keuntungan besar",
            "Memfokuskan pada kecerdasan teknis dengan mengurangi dampak sosial dan etika",
            "Meninjau ulang pengembangan AI untuk mengevaluasi implikasi etika lebih lanjut",
            "Mengadakan konferensi ilmiah tentang keberlanjutan AI",
            "Mendapatkan masukan dari komunitas ilmiah dan etika untuk pengembangan AI yang lebih baik",
            "Menyelidiki opsi alternatif untuk penggunaan AI di kendaraan otonom"
        ],
        "correctAnswer": 0 // Mengembangkan kecerdasan emosional dan sosial AI dengan potensi keuntungan besar
    }
    ,
    {
        "question": "Sebagai seorang ekonom yang menghadapi resesi mendalam, Anda harus merancang kebijakan fiskal yang tepat. Bagaimana Anda mengevaluasi dan memilih kebijakan yang tepat?",
        "options": [
            "Meluncurkan stimulus besar-besaran dengan risiko utang negara yang signifikan",
            "Menerapkan kebijakan penghematan ketat untuk menjaga kredibilitas keuangan negara",
            "Mengajukan bantuan finansial dari lembaga internasional untuk mengelola krisis ekonomi",
            "Mengadakan pertemuan dengan pemimpin industri untuk mendiskusikan langkah pemulihan ekonomi",
            "Mengumpulkan data ekonomi terbaru untuk analisis kebijakan yang lebih akurat",
            "Menyusun strategi kolaboratif dengan sektor swasta untuk mengatasi dampak resesi"
        ],
        "correctAnswer": 0 // Meluncurkan stimulus besar-besaran dengan risiko utang negara yang signifikan
    }
    ,
    {
        "question": "Sebagai seorang arsitek terkenal, Anda ditugaskan untuk merancang bangunan bersejarah dengan mempertahankan nilai estetika dan memenuhi standar keberlanjutan. Bagaimana Anda menyeimbangkan pertimbangan ini?",
        "options": [
            "Mengintegrasikan teknologi canggih untuk mencapai efisiensi energi tinggi",
            "Memilih mempertahankan desain klasik yang indah untuk memenuhi standar arsitektur bersejarah",
            "Mengadakan konsultasi dengan arsitek dan insinyur untuk mencari solusi terbaik yang memadukan kedua aspek",
            "Meninjau ulang desain bangunan untuk memasukkan elemen keberlanjutan",
            "Mengorganisir konferensi internasional tentang arsitektur dan keberlanjutan untuk mencari solusi bersama",
            "Mempertimbangkan opsi-opsi lain untuk menggabungkan keindahan dan keberlanjutan"
        ],
        "correctAnswer": 2 // Mengadakan konsultasi dengan arsitek dan insinyur untuk mencari solusi terbaik yang memadukan kedua aspek
    }
    ,
    {
        "question": "Dalam sebuah simulasi bencana, pilihan Anda adalah menyelamatkan lima orang yang terjebak di bawah reruntuhan atau satu orang yang terperangkap di dalam mobil terbakar. Apa yang akan Anda pilih untuk memaksimalkan jumlah nyawa yang diselamatkan?",
        "options": [
            "Lima orang di bawah reruntuhan",
            "Satu orang di dalam mobil terbakar",
            "Tidak menyelamatkan siapa pun",
            "Menyelamatkan kedua kelompok dengan bantuan tambahan",
            "Bergantung pada kondisi fisik dan keselamatan pribadi",
            "Evaluasi situasi berdasarkan prioritas penanganan medis"
        ],
        "correctAnswer": 0 // Lima orang di bawah reruntuhan
    }
    ,
    {
        "question": "Anda memimpin tim riset dengan dua proyek penting: satu berpotensi menghasilkan keuntungan besar dengan risiko tinggi, dan satu lagi stabil tetapi memiliki potensi keuntungan kecil. Bagaimana Anda memilih proyek yang akan diberikan prioritas pertama?",
        "options": [
            "Proyek berpotensi keuntungan besar dengan risiko tinggi",
            "Proyek stabil dengan potensi keuntungan kecil",
            "Keduanya diberikan prioritas yang sama",
            "Tidak memprioritaskan proyek manapun",
            "Mengkaji lebih lanjut mengenai kedua proyek",
            "Evaluasi dampak jangka panjang dari masing-masing pilihan"
        ],
        "correctAnswer": 1 // Proyek stabil dengan potensi keuntungan kecil
    }
    ,
    {
        "question": "Anda diberi kesempatan untuk memilih antara menerima pekerjaan dengan gaji tinggi tetapi tekanan kerja yang besar, atau pekerjaan dengan gaji lebih rendah tetapi lingkungan kerja yang lebih nyaman. Mana yang akan Anda pilih dan mengapa?",
        "options": [
            "Pekerjaan dengan gaji tinggi dan tekanan kerja besar",
            "Pekerjaan dengan gaji rendah dan lingkungan kerja nyaman",
            "Meminta penawaran pekerjaan yang berbeda",
            "Menimbang kembali opsi pekerjaan",
            "Konsultasi dengan orang terdekat",
            "Evaluasi potensi pengembangan karier dari masing-masing opsi"
        ],
        "correctAnswer": 1 // Pekerjaan dengan gaji rendah dan lingkungan kerja nyaman
    }
    ,
    {
        "question": "Anda bertaruh dalam permainan kartu di mana Anda memiliki dua pilihan: satu kartu memiliki peluang menang tinggi tetapi hadiah kecil, sedangkan kartu lainnya memiliki peluang menang rendah tetapi hadiah besar. Bagaimana strategi yang Anda pilih untuk bermain?",
        "options": [
            "Memilih kartu dengan peluang menang tinggi dan hadiah kecil",
            "Memilih kartu dengan peluang menang rendah dan hadiah besar",
            "Tidak bertaruh",
            "Menunggu peluang yang lebih baik",
            "Mengurangi risiko dengan tidak bertaruh",
            "Melakukan riset untuk memperoleh informasi lebih lanjut tentang kedua kartu"
        ],
        "correctAnswer": 1 // Memilih kartu dengan peluang menang rendah dan hadiah besar
    }
    ,
    {
        "question": "Anda dihadapkan pada dua pilihan: satu adalah menerima tawaran pekerjaan di luar negeri dengan gaji tinggi tetapi jauh dari keluarga, dan satu lagi adalah pekerjaan lokal dengan gaji yang cukup dan dekat dengan keluarga. Bagaimana Anda mengambil keputusan ini?",
        "options": [
            "Menerima tawaran pekerjaan di luar negeri dengan gaji tinggi",
            "Menerima pekerjaan lokal dengan gaji cukup",
            "Tidak menerima tawaran pekerjaan mana pun",
            "Meminta saran dari ahli karier",
            "Mencari tahu tentang lebih banyak opsi pekerjaan",
            "Meninjau kembali prioritas hidup dan nilai-nilai pribadi untuk mengambil keputusan"
        ],
        "correctAnswer": 1 // Menerima pekerjaan lokal dengan gaji cukup
    },
    {
        "question": "Seorang detektif sedang menyelidiki kasus di sebuah apartemen dengan empat orang: Mr. Black, Mr. White, Mr. Green, dan Mr. Blue. Informasi yang dikumpulkan detektif:\n1. Mr. Black di sebelah kiri Mr. White.\n2. Mr. Green tidak di ujung kiri.\n3. Mr. Blue tidak di sebelah kanan Mr. Green.\nDi mana masing-masing orang tinggal?",
        "options": [
            "Mr. Black",
            "Mr. White",
            "Mr. Green",
            "Mr. Blue",
            "Tidak dapat ditentukan",
            "Informasi tidak mencukupi"
        ],
        "correctAnswer": 1 // Mr. White
    }
    ,
    {
        "question": "Empat tersangka (W, X, Y, Z) sedang diinterogasi. W berkata, 'X yang melakukannya.' X berkata, 'Y yang melakukannya.' Y berkata, 'Z yang melakukannya.' Z berkata, 'W berbohong.' Jika hanya satu dari mereka yang mengatakan kebenaran, siapa yang melakukan kejahatan?",
        "options": [
            "W",
            "X",
            "Y",
            "Z",
            "Pernyataan mereka saling bertentangan",
            "Tidak dapat dipastikan dari pernyataan yang ada"
        ],
        "correctAnswer": 1 // X
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
            if (attempts >= 2) { // Perubahan di sini untuk 3 kali salah
                alert("Anda telah menjawab salah dua kali. Kembali ke soal pertama.");
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
