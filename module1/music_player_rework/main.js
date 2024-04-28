const $ = document.querySelector.bind(document);
const trackName = $('#track-name');
const cdThumb = $('#cd');
const audio = $('#audio');
const singer = $('#singer-name');
const playing = $('#playing');
const progress = $('#progress');
const skipBtn = $('#skip');
const backwardBtn = $('#backward');
const randomBtn = $('#shuffle');
const repeatBtn = $('#repeat');
let isPause = false;
let isRandom = false;
let isRepeat = false;


const app = {
    currentIndex: 0,
    songs: [
        {   name: 'Gửi Người Em Gái Hà Tĩnh (Remix)',
            singer: 'Thái Học',
            path: 'song/song1.mp3',
            image: 'image/image1.jpg',
        },
        {
            name: 'Chúng Ta Chỉ Là Đã Từng Yêu (Remix 3)',
            singer: 'Thiên Tú',
            path: 'song/song2.mp3',
            image: 'image/image2.jpg',
        },
        {
            name: 'Đế Vương',
            singer: 'Đình Dũng',
            path: 'song/song3.mp3',
            image: 'image/image3.jpg',
        },
        {
            name: 'Chỉ Bằng Cái Gật Đầu',
            singer: 'Yan Nguyễn',
            path: 'song/song4.mp3',
            image: 'image/image4.jpg',
        },
        {
            name: 'Khuất Lối (Remix)',
            singer: 'H-Kray',
            path: 'song/song5.mp3',
            image: 'image/image5.jpg',
        },
        {
            name: 'Người Lạ Ơi',
            singer: 'Karik, Orange, Superbrothers',
            path: 'song/song6.mp3',
            image: 'image/image6.jpg',
        },
        {
            name: 'Tấm Lòng Son',
            singer: 'H-Kray',
            path: 'song/song7.mp3',
            image: 'image/image7.jpg',
        },
        {
            name: 'Tất Cả Hoặc Không Là Gì Cả',
            singer: 'Cao Thái Sơn',
            path: 'song/song8.mp3',
            image: 'image/image8.jpg',
        },
        {
            name: 'Thế Thái (Orinn Remix)',
            singer: 'Hương Ly',
            path: 'song/song9.mp3',
            image: 'image/image9.jpg',
        },
        {
            name: 'Xem Như Em Chẳng May',
            singer: 'Lương Bích Hữu',
            path: 'song/song10.mp3',
            image: 'image/image10.jpg',
        },
        {
            name: 'Ngày Mai Người Ta Lấy Chồng (Remix)',
            singer: 'Thành Đạt',
            path: 'song/song11.mp3',
            image: 'image/image11.jpg',
        }
    ],

    getCurrentSong: function () {
        return this.songs[this.currentIndex];
    },

    loadCurrentSong: function () {
        trackName.textContent = this.getCurrentSong().name
        singer.textContent = this.getCurrentSong().singer
        cdThumb.src = this.getCurrentSong().image
        audio.src = this.getCurrentSong().path
    },

    nextSong: function () {
        this.currentIndex++
        if (this.currentIndex > this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong()
    },

    backSong: function () {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong()
    },

    playRandomSong: function () {
        let newCurrentIndex;
        do {
            newCurrentIndex = Math.floor(Math.random() * this.songs.length)
        } while (newCurrentIndex === this.currentIndex);
        this.currentIndex = newCurrentIndex;
        this.loadCurrentSong();
    },

    handleEvent: function () {
        const _this = this;
        //play and pause
        playing.onclick = function () {
            if (isPause) {
                playing.innerHTML = '<i class="fa-solid fa-play"></i>';
                isPause = !isPause;
                audio.pause()
                cdThumbAnimate.pause()
            } else {
                playing.innerHTML = '<i class="fa-solid fa-pause"></i>'
                isPause = !isPause;
                audio.play()
                cdThumbAnimate.play()
            }
        }


        audio.ontimeupdate = function () {
            if (audio.duration) {
                progress.value = Math.floor(audio.currentTime / audio.duration * 100);
            }
        }

        progress.onchange = function (e) {
            audio.currentTime = audio.duration / 100 * e.target.value;
        }
        //keyframes quay 360deg
        const cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause()

        const nextSong = skipBtn.onclick = function () {
            if (isRandom) {
                _this.playRandomSong()
            } else {
                _this.nextSong()
            }
            if(isPause) {
                audio.play()
            }
        }

        backwardBtn.onclick = function () {
            if (isRandom) {
                _this.playRandomSong()
            } else {
                _this.backSong()
            }
            if(isPause) {
                audio.play()
            }
        }

        randomBtn.onclick = function () {
            isRandom = !isRandom;
            if (isRandom) {
                randomBtn.style.color = "#ff253a";
            } else {
                randomBtn.style.color = "#000000ff";
            }
        }

        repeatBtn.onclick = function () {
            isRepeat = !isRepeat;
            if (isRepeat) {
                repeatBtn.style.color = "#ff253a";
            } else {
                repeatBtn.style.color = "#000000ff";
            }
        }

        audio.onended = function () {
            if (isRepeat) {
                audio.play();
            } else {
                nextSong();
            }
        }
    },

    start: function () {
        this.loadCurrentSong()
        this.handleEvent()
    }
}
app.start();