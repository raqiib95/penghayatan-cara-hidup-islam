

        // Data Structure
        const data = {
            categories: [
                {
                    id: 'peradaban',
                    name: 'Peradaban',
                    arabicName: 'ڤرادبن',
                    color: 'blue',
                    subCategories: [
                        {
                            id: 'adab-keluarga',
                            name: 'Adab dalam Keluarga',
                            questions: [
                                { question: 'Apakah adab terhadap ibu bapa?', answer: 'Menghormati, mentaati perintah yang baik, berbicara dengan lemah lembut, mendoakan mereka, dan tidak menyakiti hati mereka.' },
                                { question: 'Bagaimana cara menghormati adik-beradik?', answer: 'Menyayangi yang lebih muda, menghormati yang lebih tua, saling membantu, dan tidak bertengkar.' },
                                { question: 'Apakah tanggungjawab anak terhadap keluarga?', answer: 'Membantu ibu bapa, menjaga nama baik keluarga, dan menjaga hubungan baik dengan semua ahli keluarga.' },
                                { question: 'Bagaimana adab ketika berbicara dengan orang tua?', answer: 'Menggunakan suara yang lembut, tidak memotong percakapan, menggunakan bahasa yang sopan, dan mendengar dengan penuh perhatian.' },
                                { question: 'Apakah yang perlu dilakukan jika terdapat perselisihan dalam keluarga?', answer: 'Bersabar, bertenang, berbincang dengan baik, meminta maaf jika bersalah, dan mencari penyelesaian bersama.' }
                            ]
                        },
                        {
                            id: 'adab-harian',
                            name: 'Adab dalam Kehidupan Harian',
                            questions: [
                                { question: 'Apakah adab sebelum tidur?', answer: 'Berwudhu, membaca doa sebelum tidur, tidur menghadap kiblat, dan membaca surah-surah tertentu seperti Al-Ikhlas, Al-Falaq, dan An-Nas.' },
                                { question: 'Bagaimana adab ketika makan?', answer: 'Membaca bismillah, makan dengan tangan kanan, makan makanan yang terdekat, tidak mencela makanan, dan membaca doa selepas makan.' },
                                { question: 'Apakah adab ketika berjalan di jalan raya?', answer: 'Berjalan di tepi jalan, tidak mengganggu pengguna jalan lain, membantu orang yang memerlukan, dan menjaga keselamatan diri.' },
                                { question: 'Bagaimana adab ketika bertemu dengan orang lain?', answer: 'Memberi salam, tersenyum, berbicara dengan sopan, dan menghormati orang yang lebih tua.' },
                                { question: 'Apakah adab ketika berada di tempat awam?', answer: 'Menjaga kebersihan, tidak membuat bising, menghormati orang lain, dan mematuhi peraturan tempat tersebut.' },
                                { question: 'Bagaimana adab ketika menggunakan telefon?', answer: 'Berbicara dengan suara yang sesuai, tidak mengganggu orang lain, dan menggunakan bahasa yang sopan.' }
                            ]
                        },
                        {
                            id: 'adab-sekolah',
                            name: 'Adab di Sekolah',
                            questions: [
                                { question: 'Apakah adab terhadap guru?', answer: 'Menghormati guru, mendengar dengan penuh perhatian, tidak memotong percakapan guru, dan mentaati arahan guru.' },
                                { question: 'Bagaimana adab ketika berada di dalam kelas?', answer: 'Duduk dengan tertib, tidak membuat bising, menumpukan perhatian kepada pengajaran, dan bertanya dengan sopan.' },
                                { question: 'Apakah adab terhadap rakan sekolah?', answer: 'Menghormati rakan, saling membantu, tidak mengejek, dan menyelesaikan perselisihan dengan baik.' },
                                { question: 'Bagaimana adab ketika berada di perpustakaan?', answer: 'Menjaga ketenangan, menjaga kebersihan buku, mengembalikan buku pada tempatnya, dan tidak merosakkan buku.' },
                                { question: 'Apakah adab ketika menggunakan kemudahan sekolah?', answer: 'Menjaga kebersihan, tidak merosakkan kemudahan, menggunakan dengan berhemah, dan melaporkan kerosakan kepada pihak berkenaan.' }
                            ]
                        },
                        {
                            id: 'adab-pakaian',
                            name: 'Adab Berpakaian',
                            questions: [
                                { question: 'Apakah ciri-ciri pakaian yang menutup aurat bagi lelaki?', answer: 'Menutup bahagian antara pusat hingga lutut, tidak ketat, tidak jarang, dan tidak menyerupai pakaian wanita.' },
                                { question: 'Apakah ciri-ciri pakaian yang menutup aurat bagi perempuan?', answer: 'Menutup seluruh tubuh kecuali muka dan tapak tangan, tidak ketat, tidak jarang, dan tidak menyerupai pakaian lelaki.' },
                                { question: 'Bagaimana adab berpakaian ketika ke sekolah?', answer: 'Memakai pakaian seragam dengan kemas, bersih, dan mengikut peraturan sekolah.' },
                                { question: 'Apakah adab berpakaian ketika ke masjid atau surau?', answer: 'Memakai pakaian yang bersih, sopan, menutup aurat dengan sempurna, dan tidak memakai pakaian yang menarik perhatian.' },
                                { question: 'Bagaimana adab berpakaian ketika menghadiri majlis?', answer: 'Memakai pakaian yang sesuai dengan majlis, bersih, kemas, dan menutup aurat.' }
                            ]
                        },
                        {
                            id: 'doa-harian',
                            name: 'Doa Harian',
                            questions: [
                                { question: 'Apakah doa sebelum makan?', answer: 'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ (Bismillahir rahmanir rahim)' },
                                { question: 'Apakah doa selepas makan?', answer: 'الْحَمْدُ لِلّٰهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِينَ (Alhamdulillahil lazi at\'amana wa saqana wa ja\'alana minal muslimin)' },
                                { question: 'Apakah doa sebelum tidur?', answer: 'بِاسْمِكَ اللّٰهُمَّ أَمُوتُ وَأَحْيَا (Bismika Allahumma amutu wa ahya)' },
                                { question: 'Apakah doa ketika bangun tidur?', answer: 'الْحَمْدُ لِلّٰهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ (Alhamdulillahil lazi ahyana ba\'da ma amatana wa ilaihin nushur)' },
                                { question: 'Apakah doa masuk tandas?', answer: 'اللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ (Allahumma inni a\'uzu bika minal khubuthi wal khabaits)' },
                                { question: 'Apakah doa keluar tandas?', answer: 'غُفْرَانَكَ الْحَمْدُ لِلّٰهِ الَّذِي أَذْهَبَ عَنِّي الْأَذَى وَعَافَانِي (Ghufranaka. Alhamdulillahil lazi azhaba \'annil aza wa \'afani)' }
                            ]
                        }
                    ]
                },
                {
                    id: 'ibadah',
                    name: 'Ibadah',
                    arabicName: 'عبادة',
                    color: 'green',
                    subCategories: [
                        {
                            id: 'toharoh',
                            name: 'Toharoh (Kesucian)',
                            questions: [
                                { question: 'Apakah yang dimaksudkan dengan toharoh?', answer: 'Toharoh bermaksud bersuci daripada hadas kecil dan hadas besar serta najis.' },
                                { question: 'Apakah perbezaan antara wudhu dan tayammum?', answer: 'Wudhu menggunakan air untuk bersuci, manakala tayammum menggunakan debu yang suci sebagai ganti air ketika tiada air atau tidak boleh menggunakan air.' },
                                { question: 'Bilakah seseorang perlu melakukan istinja\'?', answer: 'Istinja\' perlu dilakukan selepas membuang air kecil atau air besar untuk membersihkan najis.' }
                            ]
                        },
                        {
                            id: 'solat',
                            name: 'Solat',
                            questions: [
                                { question: 'Apakah rukun solat?', answer: 'Rukun solat terdiri daripada niat, berdiri tegak bagi yang mampu, takbiratul ihram, membaca Al-Fatihah, rukuk, iktidal, sujud, duduk antara dua sujud, duduk tahiyat akhir, membaca tahiyat akhir, selawat ke atas Nabi dalam tahiyat akhir, memberi salam yang pertama, dan tertib.' },
                                { question: 'Apakah perkara yang membatalkan solat?', answer: 'Perkara yang membatalkan solat termasuk berhadas, terkena najis, terbuka aurat, berkata-kata dengan sengaja, banyak bergerak, makan atau minum, tertawa, dan murtad.' },
                                { question: 'Bagaimanakah cara melakukan solat jamak?', answer: 'Solat jamak dilakukan dengan menggabungkan dua solat dalam satu waktu, iaitu Zohor dengan Asar, atau Maghrib dengan Isyak. Boleh dilakukan secara jamak taqdim (solat awal) atau jamak takhir (solat akhir).' }
                            ]
                        },
                        {
                            id: 'puasa',
                            name: 'Puasa',
                            questions: [
                                { question: 'Apakah rukun puasa?', answer: 'Rukun puasa ialah niat pada malam hari dan menahan diri daripada perkara yang membatalkan puasa dari terbit fajar hingga terbenam matahari.' },
                                { question: 'Apakah perkara yang membatalkan puasa?', answer: 'Perkara yang membatalkan puasa termasuk makan dan minum dengan sengaja, muntah dengan sengaja, haid dan nifas, gila, dan murtad.' },
                                { question: 'Siapakah yang diharuskan untuk tidak berpuasa?', answer: 'Orang yang diharuskan untuk tidak berpuasa termasuk orang sakit, musafir, wanita hamil atau menyusukan anak, dan orang tua yang tidak mampu berpuasa.' }
                            ]
                        },
                        {
                            id: 'hadas-besar',
                            name: 'Menyucikan Hadas Besar',
                            questions: [
                                { question: 'Apakah yang dimaksudkan dengan hadas besar?', answer: 'Hadas besar adalah keadaan tidak suci yang memerlukan mandi wajib untuk bersuci, seperti selepas berjimak, keluar air mani, haid, nifas, dan wiladah.' },
                                { question: 'Bagaimanakah cara melakukan mandi wajib?', answer: 'Mandi wajib dilakukan dengan niat, membasuh seluruh tubuh termasuk rambut, dan memastikan air sampai ke seluruh bahagian tubuh termasuk lipatan-lipatan kulit.' },
                                { question: 'Bilakah seseorang wajib melakukan mandi wajib?', answer: 'Seseorang wajib melakukan mandi wajib selepas berjimak, keluar air mani sama ada ketika tidur atau jaga, selepas haid, selepas nifas, dan selepas melahirkan anak.' }
                            ]
                        },
                        {
                            id: 'solat-jamak-qasar',
                            name: 'Solat Jamak dan Qasar',
                            questions: [
                                { question: 'Apakah yang dimaksudkan dengan solat qasar?', answer: 'Solat qasar adalah memendekkan solat 4 rakaat (Zohor, Asar, dan Isyak) menjadi 2 rakaat ketika dalam perjalanan yang memenuhi syarat.' },
                                { question: 'Apakah syarat-syarat untuk melakukan solat jamak?', answer: 'Syarat-syarat solat jamak termasuk dalam perjalanan yang memenuhi syarat, dalam keadaan hujan lebat, sakit, atau keadaan yang menyukarkan untuk melakukan solat pada waktunya.' },
                                { question: 'Bolehkah solat jamak dan qasar dilakukan serentak?', answer: 'Ya, solat jamak dan qasar boleh dilakukan serentak bagi musafir yang memenuhi syarat-syarat kedua-duanya.' }
                            ]
                        }
                    ]
                },
                {
                    id: 'akidah',
                    name: 'Akidah',
                    arabicName: 'عقيدة',
                    color: 'purple',
                    subCategories: [
                        {
                            id: 'rukun-islam-iman',
                            name: 'Rukun Islam/Rukun Iman',
                            questions: [
                                { question: 'Apakah Rukun Islam?', answer: 'Rukun Islam terdiri daripada lima perkara: mengucap dua kalimah syahadah, mendirikan solat lima waktu, menunaikan zakat, berpuasa di bulan Ramadhan, dan menunaikan haji bagi yang mampu.' },
                                { question: 'Apakah Rukun Iman?', answer: 'Rukun Iman terdiri daripada enam perkara: beriman kepada Allah, beriman kepada Malaikat, beriman kepada Kitab-kitab, beriman kepada Rasul-rasul, beriman kepada Hari Kiamat, dan beriman kepada Qada\' dan Qadar.' },
                                { question: 'Mengapa kita perlu beriman kepada Rukun Islam dan Rukun Iman?', answer: 'Rukun Islam dan Rukun Iman adalah asas kepercayaan dan amalan dalam Islam. Beriman kepada keduanya adalah syarat untuk menjadi seorang Muslim yang sejati dan mendapat keredhaan Allah SWT.' }
                            ]
                        },
                        {
                            id: 'sifat-wajib-allah',
                            name: 'Sifat Wajib bagi Allah',
                            questions: [
                                { question: 'Apakah yang dimaksudkan dengan sifat wajib bagi Allah?', answer: 'Sifat wajib bagi Allah adalah sifat-sifat kesempurnaan yang pasti ada pada Allah SWT dan mustahil tiada pada-Nya.' },
                                { question: 'Sebutkan 20 sifat wajib bagi Allah.', answer: 'Wujud, Qidam, Baqa\', Mukhalafatuhu lil hawadith, Qiyamuhu binafsihi, Wahdaniyyah, Qudrat, Iradat, Ilmu, Hayat, Sama\', Basar, Kalam, Qadirun, Muridun, Alimun, Hayyun, Sami\'un, Basirun, Mutakallimun.' },
                                { question: 'Apakah maksud sifat Wahdaniyyah?', answer: 'Wahdaniyyah bermaksud Allah SWT Maha Esa atau Maha Tunggal, tiada sekutu bagi-Nya dalam zat, sifat, dan perbuatan-Nya.' }
                            ]
                        },
                        {
                            id: 'asmaul-husna',
                            name: 'Asmaul Husna',
                            questions: [
                                { question: 'Apakah yang dimaksudkan dengan Asmaul Husna?', answer: 'Asmaul Husna adalah nama-nama Allah yang baik dan indah yang menunjukkan kesempurnaan dan keagungan-Nya. Terdapat 99 Asmaul Husna yang diketahui.' },
                                { question: 'Sebutkan lima contoh Asmaul Husna dan maksudnya.', answer: 'Ar-Rahman (Maha Pemurah), Ar-Rahim (Maha Penyayang), Al-Malik (Maha Raja), Al-Quddus (Maha Suci), As-Salam (Maha Sejahtera).' },
                                { question: 'Apakah fadhilat menghafal dan memahami Asmaul Husna?', answer: 'Menghafal dan memahami Asmaul Husna dapat mendekatkan diri kepada Allah, meningkatkan keimanan, mendapat syafaat di akhirat, dan dijanjikan syurga bagi orang yang menghafal dan mengamalkannya.' }
                            ]
                        },
                        {
                            id: 'sifat-rasul',
                            name: 'Sifat Mustahil dan Wajib bagi Rasul',
                            questions: [
                                { question: 'Apakah sifat wajib bagi Rasul?', answer: 'Sifat wajib bagi Rasul adalah Siddiq (benar), Amanah (jujur), Tabligh (menyampaikan), dan Fatanah (bijaksana).' },
                                { question: 'Apakah sifat mustahil bagi Rasul?', answer: 'Sifat mustahil bagi Rasul adalah Kizib (dusta), Khianat (khianat), Kitman (menyembunyikan), dan Baladah (bodoh).' },
                                { question: 'Mengapa Rasul perlu memiliki sifat-sifat wajib tersebut?', answer: 'Rasul perlu memiliki sifat-sifat wajib tersebut kerana mereka adalah utusan Allah yang bertanggungjawab menyampaikan wahyu dan menjadi contoh teladan kepada umat manusia. Sifat-sifat ini memastikan mereka dapat melaksanakan tugas dengan sempurna dan dipercayai oleh umat.' }
                            ]
                        }
                    ]
                },
                {
                    id: 'sahsiah',
                    name: 'Sahsiah',
                    arabicName: 'شخصية',
                    color: 'red',
                    subCategories: [
                        {
                            id: 'ihsan',
                            name: 'Ihsan',
                            questions: [
                                { question: 'Apakah yang dimaksudkan dengan ihsan?', answer: 'Ihsan bermaksud melakukan sesuatu dengan sebaik-baiknya kerana sedar Allah sentiasa melihat dan mengawasi kita. Ia juga bermaksud berbuat baik kepada semua makhluk.' },
                                { question: 'Bagaimanakah cara untuk menerapkan sifat ihsan dalam kehidupan seharian?', answer: 'Cara menerapkan sifat ihsan termasuk melakukan ibadah dengan khusyuk, bekerja dengan tekun dan jujur, berbuat baik kepada semua orang, membantu orang yang memerlukan, dan sentiasa berusaha memperbaiki diri.' }
                            ]
                        },
                        {
                            id: 'amanah',
                            name: 'Amanah',
                            questions: [
                                { question: 'Apakah yang dimaksudkan dengan amanah?', answer: 'Amanah bermaksud sifat jujur, boleh dipercayai, dan bertanggungjawab dalam melaksanakan tugas atau menjaga sesuatu yang dipercayakan.' },
                                { question: 'Apakah contoh perbuatan amanah dalam kehidupan seharian?', answer: 'Contoh perbuatan amanah termasuk mengembalikan barang yang dipinjam, menyampaikan pesanan dengan tepat, menjaga rahsia, melaksanakan tugas dengan baik, dan menggunakan harta atau jawatan dengan betul.' }
                            ]
                        },
                        {
                            id: 'takwa',
                            name: 'Takwa',
                            questions: [
                                { question: 'Apakah yang dimaksudkan dengan takwa?', answer: 'Takwa bermaksud menjaga diri daripada azab Allah dengan melaksanakan perintah-Nya dan menjauhi larangan-Nya. Ia juga bermaksud kesedaran dan rasa takut kepada Allah dalam setiap tindakan.' },
                                { question: 'Bagaimanakah cara untuk meningkatkan ketakwaan kepada Allah?', answer: 'Cara meningkatkan ketakwaan termasuk melaksanakan solat dengan khusyuk, membaca dan memahami Al-Quran, berzikir, muhasabah diri, bergaul dengan orang-orang soleh, dan sentiasa mengingati mati.' }
                            ]
                        },
                        {
                            id: 'istiqamah',
                            name: 'Istiqamah',
                            questions: [
                                { question: 'Apakah yang dimaksudkan dengan istiqamah?', answer: 'Istiqamah bermaksud teguh pendirian, konsisten, dan berterusan dalam melakukan kebaikan dan menjauhi kemungkaran tanpa berputus asa.' },
                                { question: 'Apakah faedah menjadi seorang yang istiqamah?', answer: 'Faedah menjadi seorang yang istiqamah termasuk mendapat keredhaan Allah, hidup lebih tenang dan teratur, mencapai kejayaan dalam kehidupan, menjadi contoh teladan kepada orang lain, dan mendapat ganjaran syurga di akhirat.' }
                            ]
                        },
                        {
                            id: 'tawaduk',
                            name: 'Tawaduk',
                            questions: [
                                { question: 'Apakah yang dimaksudkan dengan tawaduk?', answer: 'Tawaduk bermaksud rendah hati, tidak sombong, dan tidak memandang rendah orang lain walaupun mempunyai kelebihan atau kedudukan yang tinggi.' },
                                { question: 'Bagaimanakah cara untuk menerapkan sifat tawaduk dalam kehidupan?', answer: 'Cara menerapkan sifat tawaduk termasuk tidak membanggakan diri, menghormati semua orang tanpa mengira status, menerima nasihat dan kritikan dengan baik, sentiasa bersyukur, dan mengakui kesilapan sendiri.' }
                            ]
                        }
                    ]
                }
            ]
        };

        // Game state
        const gameState = {
            belajar: {
                completedCategories: {},
                completedSubCategories: {},
                currentCategory: null,
                currentSubCategory: null
            },
            kuiz: {
                completedCategories: {},
                completedSubCategories: {},
                score: 0,
                timer: null,
                timeLeft: 30 * 60, // 30 minutes in seconds
                isRunning: false,
                currentCategory: null,
                currentSubCategory: null
            },
            currentAd: null,
            adTimer: null,
            adCountdown: null
        };

        // Helper functions
        function createSVG(type, color) {
            let svgContent = '';
            
            switch(type) {
                case "book":
                    svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" width="100%" height="100%"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`;
                    break;
                case "quran":
                    svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" width="100%" height="100%"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`;
                    break;
                case "mobile":
                    svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" width="100%" height="100%"><path d="M12 18.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path d="M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2zm-1 18H8V4h8v16z"></path></svg>`;
                    break;
                case "seminar":
                    svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" width="100%" height="100%"><path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2zM12 6a1 1 0 100 2 1 1 0 000-2zM6 12a1 1 0 100 2 1 1 0 000-2zm0-4a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2zm-6 4a1 1 0 100 2 1 1 0 000-2z"></path></svg>`;
                    break;
                case "tools":
                    svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" width="100%" height="100%"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"></path></svg>`;
                    break;
                default:
                    svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" width="100%" height="100%"><circle cx="12" cy="12" r="10"></circle></svg>`;
            }
            
            return svgContent;
        }

        function showSection(sectionId) {
            document.querySelectorAll('#app > div').forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById(sectionId).classList.remove('hidden');
        }

        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        }

        function startQuizTimer() {
            if (gameState.kuiz.timer) {
                clearInterval(gameState.kuiz.timer);
            }
            
            gameState.kuiz.timeLeft = 30 * 60; // Reset to 30 minutes
            gameState.kuiz.isRunning = true;
            
            updateTimerDisplay();
            
            gameState.kuiz.timer = setInterval(() => {
                if (gameState.kuiz.timeLeft > 0) {
                    gameState.kuiz.timeLeft--;
                    updateTimerDisplay();
                    
                    // Warning when 1 minute left
                    if (gameState.kuiz.timeLeft === 60) {
                        document.getElementById('kuiz-timer').classList.add('timer-warning');
                    }
                } else {
                    endQuiz();
                }
            }, 1000);
        }

        function updateTimerDisplay() {
            document.getElementById('kuiz-timer').textContent = `Masa: ${formatTime(gameState.kuiz.timeLeft)}`;
        }

        function endQuiz() {
            clearInterval(gameState.kuiz.timer);
            gameState.kuiz.isRunning = false;
            
            document.getElementById('final-score').textContent = `${gameState.kuiz.score}/100`;
            document.getElementById('score-display').classList.remove('hidden');
            document.getElementById('congratulations-modal').classList.remove('hidden');
            
            createConfetti();
        }

        function createConfetti() {
            const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
            
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = `${Math.random() * 100}%`;
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = `${Math.random() * 10 + 5}px`;
                confetti.style.height = `${Math.random() * 10 + 5}px`;
                confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
                confetti.style.animationDelay = `${Math.random() * 2}s`;
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }
        }

        function getCategoryColor(color) {
            const colors = {
                'blue': '#3B82F6',
                'green': '#10B981',
                'purple': '#8B5CF6',
                'red': '#EF4444',
                'yellow': '#F59E0B'
            };
            
            return colors[color] || '#3B82F6';
        }

        // Render functions for Belajar mode
        function renderBelajarKategori() {
            const container = document.getElementById('belajar-kategori');
            container.innerHTML = '';
            
            data.categories.forEach(category => {
                const isCompleted = gameState.belajar.completedCategories[category.id];
                const card = document.createElement('div');
                card.className = `card relative bg-white rounded-xl shadow-lg overflow-hidden ${isCompleted ? 'completed' : ''}`;
                card.style.borderLeft = `6px solid ${getCategoryColor(category.color)}`;
                
                card.innerHTML = `
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">${category.name}</h3>
                        <p class="text-gray-600 mb-4">${category.arabicName}</p>
                        <p class="text-sm text-gray-500">${category.subCategories.length} subkategori</p>
                    </div>
                `;
                
                card.addEventListener('click', () => {
                    gameState.belajar.currentCategory = category;
                    renderBelajarSubkategori(category);
                    showBelajarSubkategori();
                });
                
                container.appendChild(card);
            });
            
            document.getElementById('belajar-subkategori').classList.add('hidden');
            document.getElementById('belajar-soalan').classList.add('hidden');
            document.getElementById('belajar-kategori').classList.remove('hidden');
        }

        function renderBelajarSubkategori(category) {
            const container = document.getElementById('belajar-subkategori-list');
            container.innerHTML = '';
            
            document.getElementById('belajar-subkategori-title').textContent = `${category.name} (${category.arabicName})`;
            
            category.subCategories.forEach(subCategory => {
                const isCompleted = gameState.belajar.completedSubCategories[subCategory.id];
                const card = document.createElement('div');
                card.className = `card relative bg-white rounded-xl shadow-lg overflow-hidden ${isCompleted ? 'completed' : ''}`;
                card.style.borderLeft = `6px solid ${getCategoryColor(category.color)}`;
                
                card.innerHTML = `
                    <div class="p-6">
                        <h4 class="text-lg font-bold mb-2">${subCategory.name}</h4>
                        <p class="text-sm text-gray-500">${subCategory.questions.length} soalan</p>
                    </div>
                `;
                
                card.addEventListener('click', () => {
                    gameState.belajar.currentSubCategory = subCategory;
                    renderBelajarSoalan(category, subCategory);
                    showBelajarSoalan();
                });
                
                container.appendChild(card);
            });
            
            document.getElementById('belajar-kategori').classList.add('hidden');
            document.getElementById('belajar-subkategori').classList.remove('hidden');
            document.getElementById('belajar-soalan').classList.add('hidden');
        }

function renderBelajarSoalan(category, subCategory) {
    const container = document.getElementById('belajar-soalan-list');
    container.innerHTML = '';

    document.getElementById('belajar-soalan-title').textContent = subCategory.name;

    gameState.belajar.currentSubCategory = subCategory;
    gameState.belajar.currentCategory = category;
    gameState.belajar.currentQuestionIndex = 0; // Mula dari soalan pertama

    showBelajarCurrentQuestion();
}

function showBelajarCurrentQuestion() {
    const container = document.getElementById('belajar-soalan-list');
    container.innerHTML = '';

    const subCategory = gameState.belajar.currentSubCategory;
    const questionIndex = gameState.belajar.currentQuestionIndex;
    const totalQuestions = subCategory.questions.length;

    if (questionIndex >= totalQuestions) {
        // Semua soalan dah habis
        gameState.belajar.completedSubCategories[subCategory.id] = true;

        // Semak kalau semua subkategori dalam kategori ini dah selesai
        const allDone = gameState.belajar.currentCategory.subCategories.every(sc => gameState.belajar.completedSubCategories[sc.id]);

        if (allDone) {
            gameState.belajar.completedCategories[gameState.belajar.currentCategory.id] = true;
        }

        // Kembali ke Subkategori List
        renderBelajarSubkategori(gameState.belajar.currentCategory);
        showBelajarSubkategori();

        // Kalau semua kategori habis, keluar popup Tahniah
const semuaKategoriHabis = data.categories.every(cat => gameState.belajar.completedCategories[cat.id]);
if (semuaKategoriHabis) {
    document.getElementById('congratulations-modal').classList.remove('hidden');
    document.getElementById('score-display').classList.add('hidden'); // sembunyikan markah
    document.getElementById('restart-belajar-btn').classList.remove('hidden'); // tunjuk Belajar Semula
    document.getElementById('restart-btn').classList.add('hidden'); // sembunyikan Main Semula
}


        return;
    }

    const question = subCategory.questions[questionIndex];

    const card = document.createElement('div');
    card.className = 'bg-white rounded-xl shadow-lg p-6';

    card.innerHTML = `
        <h5 class="text-lg font-bold mb-4">Soalan ${questionIndex + 1} / ${totalQuestions}</h5>
        <p class="text-xl mb-6">${question.question}</p>
        <div class="text-center">
            <button id="next-question-btn" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-bold">Soalan Seterusnya</button>
        </div>
    `;

    container.appendChild(card);

    document.getElementById('next-question-btn').addEventListener('click', () => {
        // Bila klik, tunjukkan jawapan dulu
        card.innerHTML = `
            <h5 class="text-lg font-bold mb-4">Soalan ${questionIndex + 1} / ${totalQuestions}</h5>
            <p class="text-xl mb-6">${question.question}</p>
            <p class="text-green-600 font-bold mb-6">${question.answer}</p>
            <div class="text-center">
                <button id="continue-btn" class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-bold">Teruskan</button>
            </div>
        `;

        document.getElementById('continue-btn').addEventListener('click', () => {
            gameState.belajar.currentQuestionIndex++;
            showBelajarCurrentQuestion();
        });
    });
}



        // Render functions for Kuiz mode
        function renderKuizKategori() {
            const container = document.getElementById('kuiz-kategori');
            container.innerHTML = '';
            
            data.categories.forEach(category => {
                const isCompleted = gameState.kuiz.completedCategories[category.id];
                const card = document.createElement('div');
                card.className = `card relative bg-white rounded-xl shadow-lg overflow-hidden ${isCompleted ? 'completed' : ''}`;
                card.style.borderLeft = `6px solid ${getCategoryColor(category.color)}`;
                
                card.innerHTML = `
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">${category.name}</h3>
                        <p class="text-gray-600 mb-4">${category.arabicName}</p>
                        <p class="text-sm text-gray-500">${category.subCategories.length} subkategori</p>
                    </div>
                `;
                
                card.addEventListener('click', () => {
                    gameState.kuiz.currentCategory = category;
                    renderKuizSubkategori(category);
                    showKuizSubkategori();
                });
                
                container.appendChild(card);
            });
            
            document.getElementById('kuiz-subkategori').classList.add('hidden');
            document.getElementById('kuiz-soalan').classList.add('hidden');
            document.getElementById('kuiz-kategori').classList.remove('hidden');
        }

        function renderKuizSubkategori(category) {
            const container = document.getElementById('kuiz-subkategori-list');
            container.innerHTML = '';
            
            document.getElementById('kuiz-subkategori-title').textContent = `${category.name} (${category.arabicName})`;
            
            category.subCategories.forEach(subCategory => {
                const isCompleted = gameState.kuiz.completedSubCategories[subCategory.id];
                const card = document.createElement('div');
                card.className = `card relative bg-white rounded-xl shadow-lg overflow-hidden ${isCompleted ? 'completed' : ''}`;
                card.style.borderLeft = `6px solid ${getCategoryColor(category.color)}`;
                
                card.innerHTML = `
                    <div class="p-6">
                        <h4 class="text-lg font-bold mb-2">${subCategory.name}</h4>
                        <p class="text-sm text-gray-500">${subCategory.questions.length} soalan</p>
                    </div>
                `;
                
                card.addEventListener('click', () => {
                    gameState.kuiz.currentSubCategory = subCategory;
                    renderKuizSoalan(category, subCategory);
                    showKuizSoalan();
                });
                
                container.appendChild(card);
            });
            
            document.getElementById('kuiz-kategori').classList.add('hidden');
            document.getElementById('kuiz-subkategori').classList.remove('hidden');
            document.getElementById('kuiz-soalan').classList.add('hidden');
        }

function renderKuizSoalan(category, subCategory) {
    const container = document.getElementById('kuiz-soalan-list');
    container.innerHTML = '';

    document.getElementById('kuiz-soalan-title').textContent = subCategory.name;

    gameState.kuiz.currentSubCategory = subCategory;
    gameState.kuiz.currentCategory = category;
    gameState.kuiz.currentQuestionIndex = 0; // mula dari soalan 0

    showKuizCurrentQuestion();
}

function showKuizCurrentQuestion() {
    const container = document.getElementById('kuiz-soalan-list');
    container.innerHTML = '';

    const subCategory = gameState.kuiz.currentSubCategory;
    const questionIndex = gameState.kuiz.currentQuestionIndex;
    const totalQuestions = subCategory.questions.length;

    if (questionIndex >= totalQuestions) {
        // Semua soalan dah habis
        gameState.kuiz.completedSubCategories[subCategory.id] = true;

        // Semak kalau semua subkategori dalam kategori ini dah selesai
        const allDone = gameState.kuiz.currentCategory.subCategories.every(sc => gameState.kuiz.completedSubCategories[sc.id]);

        if (allDone) {
            gameState.kuiz.completedCategories[gameState.kuiz.currentCategory.id] = true;
        }

        // Kembali ke Subkategori List
        renderKuizSubkategori(gameState.kuiz.currentCategory);
        showKuizSubkategori();

        // Kalau semua kategori habis, keluar popup Tahniah
        const semuaKategoriHabis = data.categories.every(cat => gameState.kuiz.completedCategories[cat.id]);
        if (semuaKategoriHabis) {
            clearInterval(gameState.kuiz.timer); // Hentikan masa
            document.getElementById('final-score').textContent = `${gameState.kuiz.score}/100`;
            document.getElementById('score-display').classList.remove('hidden');
            document.getElementById('congratulations-modal').classList.remove('hidden');
        }

        return;
    }

    const question = subCategory.questions[questionIndex];

    const card = document.createElement('div');
    card.className = 'bg-white rounded-xl shadow-lg p-6';

    let pointValue = 1;
    if (gameState.kuiz.currentCategory.id === 'ibadah' || gameState.kuiz.currentCategory.id === 'akidah' || gameState.kuiz.currentCategory.id === 'sahsiah') {
        pointValue = 2;
    }

    card.innerHTML = `
        <h5 class="text-lg font-bold mb-4">Soalan ${questionIndex + 1} / ${totalQuestions}</h5>
        <p class="text-xl mb-6">${question.question}</p>
        <div class="text-center space-x-4">
            <button id="jawab-betul" class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-bold">Betul (+${pointValue} markah)</button>
            <button id="jawab-salah" class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-bold">Salah</button>
        </div>
    `;

    container.appendChild(card);

    document.getElementById('jawab-betul').addEventListener('click', () => {
        jawabSoalan(true, pointValue);
    });

    document.getElementById('jawab-salah').addEventListener('click', () => {
        jawabSoalan(false, 0);
    });
}

function jawabSoalan(betul, markah) {
    if (betul) {
        gameState.kuiz.score += markah;
    }

    // Disable dua-dua butang
    document.getElementById('jawab-betul').disabled = true;
    document.getElementById('jawab-salah').disabled = true;
    document.getElementById('jawab-betul').classList.add('opacity-50');
    document.getElementById('jawab-salah').classList.add('opacity-50');

    // Delay sikit baru ke soalan seterusnya
    setTimeout(() => {
        gameState.kuiz.currentQuestionIndex++;
        showKuizCurrentQuestion();
    }, 500);
}

function showBelajarKategori() {
    document.getElementById('belajar-kategori').classList.remove('hidden');
    document.getElementById('belajar-subkategori').classList.add('hidden');
    document.getElementById('belajar-soalan').classList.add('hidden');
}

function showBelajarSubkategori() {
    document.getElementById('belajar-kategori').classList.add('hidden');
    document.getElementById('belajar-subkategori').classList.remove('hidden');
    document.getElementById('belajar-soalan').classList.add('hidden');
}

function showBelajarSoalan() {
    document.getElementById('belajar-kategori').classList.add('hidden');
    document.getElementById('belajar-subkategori').classList.add('hidden');
    document.getElementById('belajar-soalan').classList.remove('hidden');
}

function showKuizKategori() {
    document.getElementById('kuiz-kategori').classList.remove('hidden');
    document.getElementById('kuiz-subkategori').classList.add('hidden');
    document.getElementById('kuiz-soalan').classList.add('hidden');
}

function showKuizSubkategori() {
    document.getElementById('kuiz-kategori').classList.add('hidden');
    document.getElementById('kuiz-subkategori').classList.remove('hidden');
    document.getElementById('kuiz-soalan').classList.add('hidden');
}

function showKuizSoalan() {
    document.getElementById('kuiz-kategori').classList.add('hidden');
    document.getElementById('kuiz-subkategori').classList.add('hidden');
    document.getElementById('kuiz-soalan').classList.remove('hidden');
}


function habisKuiz() {
    setTimeout(() => {
        document.getElementById('final-score').textContent = `${gameState.kuiz.score}/100`;
        document.getElementById('score-display').classList.remove('hidden');
        document.getElementById('congratulations-modal').classList.remove('hidden');
        createConfetti();
    }, 500); // Delay sikit supaya smooth
}


// Bila page siap load, terus tunjuk Main Menu
window.addEventListener('DOMContentLoaded', () => {
    showSection('main-menu');
});

// Event listener butang utama
document.getElementById('btn-belajar').addEventListener('click', () => {
    showSection('belajar-section');
    renderBelajarKategori();
    showBelajarKategori();
});

document.getElementById('btn-kuiz').addEventListener('click', () => {
    showSection('kuiz-section');
    renderKuizKategori();
    showKuizKategori();
    startQuizTimer();
});

document.getElementById('btn-panduan-markah').addEventListener('click', () => {
    showSection('panduan-markah-section');
});

document.getElementById('btn-buku-panduan').addEventListener('click', () => {
    showSection('buku-panduan-section');
});

// Event listener untuk semua butang "Home" kembali ke Main Menu
document.getElementById('belajar-home').addEventListener('click', () => {
    showSection('main-menu');
});
document.getElementById('kuiz-home').addEventListener('click', () => {
    showSection('main-menu');
});
document.getElementById('panduan-home').addEventListener('click', () => {
    showSection('main-menu');
});
document.getElementById('buku-home').addEventListener('click', () => {
    showSection('main-menu');
});

// Event listener bila habis kuiz
document.getElementById('modal-home-btn').addEventListener('click', () => {
    showSection('main-menu');
    document.getElementById('congratulations-modal').classList.add('hidden');
});
document.getElementById('restart-btn').addEventListener('click', () => {
    window.location.reload();
});
document.getElementById('restart-belajar-btn').addEventListener('click', () => {
    window.location.reload();
});


// Event listener BELAJAR - Kembali dari Subkategori ke Kategori
document.getElementById('belajar-back-to-kategori').addEventListener('click', () => {
    renderBelajarKategori();
    showBelajarKategori();
});

document.getElementById('belajar-back-to-subkategori').addEventListener('click', () => {
    renderBelajarSubkategori(gameState.belajar.currentCategory);
    showBelajarSubkategori();
});

document.getElementById('kuiz-back-to-kategori').addEventListener('click', () => {
    renderKuizKategori();
    showKuizKategori();
});

document.getElementById('kuiz-back-to-subkategori').addEventListener('click', () => {
    renderKuizSubkategori(gameState.kuiz.currentCategory);
    showKuizSubkategori();
});



  const ads = [
    {
      image: "https://images.unsplash.com/photo-1617196038391-65f011e79c42?crop=entropy&cs=tinysrgb&fit=crop&h=160&w=300",
      headline: "Promosi Ramadan!",
      description: "Dapatkan 50% diskaun untuk semua produk kami sepanjang bulan ini.",
      link: "https://wa.me/60123456789"
    },
    {
      image: "https://images.unsplash.com/photo-1581091215367-59ab6c38e418?crop=entropy&cs=tinysrgb&fit=crop&h=160&w=300",
      headline: "Kelas Bahasa Arab",
      description: "Belajar Bahasa Arab dari asas hingga mahir. Daftar sekarang!",
      link: "https://example.com/kelas-arab"
    },
    {
      image: "https://images.unsplash.com/photo-1581092334495-0f4f58cb8cb1?crop=entropy&cs=tinysrgb&fit=crop&h=160&w=300",
      headline: "E-Book Percuma!",
      description: "Muat turun e-book Islamik percuma untuk motivasi harian anda.",
      link: "https://example.com/ebook-percuma"
    },
    {
      image: "https://images.unsplash.com/photo-1581092121085-7f5f3fdde3de?crop=entropy&cs=tinysrgb&fit=crop&h=160&w=300",
      headline: "Langganan Majalah",
      description: "Langgan majalah keluarga Islamik serendah RM10 sebulan.",
      link: "https://example.com/langganan"
    },
    {
      image: "https://images.unsplash.com/photo-1583301211015-998694a551b0?crop=entropy&cs=tinysrgb&fit=crop&h=160&w=300",
      headline: "Sumbangan Amal",
      description: "Bantu mereka yang memerlukan. Salurkan sumbangan anda hari ini.",
      link: "https://example.com/sumbangan"
    }
  ];

  let currentAdIndex = 0;
  let isMinimised = true;

  function updateAd() {
    const ad = ads[currentAdIndex];
    document.getElementById('adImage').src = ad.image;
    document.getElementById('adHeadline').innerText = ad.headline;
    document.getElementById('adDescription').innerText = ad.description;
    document.getElementById('adLink').href = ad.link;

    currentAdIndex = (currentAdIndex + 1) % ads.length;
  }

  updateAd();
  setInterval(updateAd, 10000);

  const floatingAd = document.getElementById('floatingAd');
  const adContent = document.getElementById('adContent');
  const toggleButton = document.getElementById('toggleButton');
  const bubbleText = document.getElementById('bubbleText');
  const bubbleHeader = document.getElementById('bubbleHeader');

  function minimiseAd() {
    adContent.classList.add('opacity-0'); // fade out content
    setTimeout(() => {
      adContent.classList.add('hidden');
      floatingAd.style.width = '12rem';
      floatingAd.classList.add('rounded-full');
      floatingAd.classList.add('animate-bounce-custom'); // trigger bounce
      setTimeout(() => {
        floatingAd.classList.remove('animate-bounce-custom'); // reset
      }, 500);
      bubbleHeader.classList.remove('hidden');
      bubbleText.innerText = 'Tawaran Hebat untuk Anda';
      toggleButton.classList.add('hidden');
    }, 500);
    isMinimised = true;
  }

  function maximiseAd() {
    floatingAd.classList.remove('rounded-full');
    floatingAd.classList.add('rounded-lg');
    floatingAd.style.width = '20rem';
    bubbleHeader.classList.add('hidden');
    toggleButton.classList.remove('hidden');
    adContent.classList.remove('hidden');
    setTimeout(() => {
      adContent.classList.remove('opacity-0');
    }, 50);
    isMinimised = false;
  }

  function toggleAd() {
    if (isMinimised) {
      maximiseAd();
    } else {
      minimiseAd();
    }
  }

  toggleButton.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleAd();
  });

  bubbleHeader.addEventListener('click', () => {
    toggleAd();
  });

  setInterval(() => {
    if (isMinimised) {
      maximiseAd();
    }
  }, 90000);
