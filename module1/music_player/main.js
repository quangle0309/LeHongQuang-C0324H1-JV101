const $ = document.querySelector.bind(document);
const trackName = $('#track-name');
const cdThumb = $('#cd-image');
const audio = $('#audio');
const singer = $('#singer-name');
const playing = $('#playing');
const progress = $('#progress');
const skipBtn = $('#skip');
const backwardBtn = $('#backward');
const randomBtn = $('#shuffle');
const repeatBtn = $('#repeat');
const playlist = $('#list-song');
const thisSong = $('.song');
let isPause = false;
let isRandom = false;
let isRepeat = false;


const app = {
    currentIndex: 0,
    songs: [
        {
            name: 'Gửi Người Em Gái Hà Tĩnh (Remix)',
            singer: 'Thái Học',
            path: 'song/song1.mp3',
            image: 'image/song1.jpg',
        },
        {
            name: 'Ngày Mai Người Ta Lấy Chồng',
            singer: 'Thành Đạt',
            path: 'song/song2.mp3',
            image: 'image/song2.jpg',
        },
        {
            name: 'Đế Vương',
            singer: 'Đình Dũng',
            path: 'song/song3.mp3',
            image: 'image/song3.jpg',
        },
        {
            name: 'Xuôi Dòng Cửu Long',
            singer: 'Diệu Kiên',
            path: 'song/song4.mp3',
            image: 'image/song4.jpg',
        },
        {
            name: 'Khuất Lối (Remix)',
            singer: 'H-Kray',
            path: 'song/song5.mp3',
            image: 'image/song5.jpg',
        },
        {
            name: 'Người Lạ Ơi',
            singer: 'Karik, Orange, Superbrothers',
            path: 'song/song6.mp3',
            image: 'image/song6.jpg',
        },
        {
            name: 'Tấm Lòng Son',
            singer: 'H-Kray',
            path: 'song/song7.mp3',
            image: 'image/song7.jpg',
        },
        {
            name: 'Tất Cả Hoặc Không Là Gì Cả',
            singer: 'Cao Thái Sơn',
            path: 'song/song8.mp3',
            image: 'image/song8.jpg',
        },
        {
            name: 'Thế Thái (Orinn Remix)',
            singer: 'Hương Ly',
            path: 'song/song9.mp3',
            image: 'image/song9.jpg',
        },
        {
            name: 'Xem Như Em Chẳng May',
            singer: 'Lương Bích Hữu',
            path: 'song/song10.mp3',
            image: 'image/song10.jpg',
        },
        {
            name: 'Chúng Ta Chỉ Là Đã Từng Yêu (Remix)',
            singer: 'Thiên Tú',
            path: 'song/song11.mp3',
            image: 'image/song11.jpg',
        }
    ],

    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
                        <div class="song ${
                index === this.currentIndex ? "active" : ""
            }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
        });
        playlist.innerHTML = htmls.join("");
    },
    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            }
        });
    },

    getCurrentSong: function () {
        return this.songs[this.currentIndex];
    },

    loadCurrentSong: function () {
        trackName.textContent = this.getCurrentSong().name;
        singer.textContent = this.getCurrentSong().singer;
        cdThumb.src = this.getCurrentSong().image;
        audio.src = this.getCurrentSong().path;
    },

    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex > this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
        this.render();
    },

    backSong: function () {
        if (audio.currentTime > 30) {
            this.loadCurrentSong();
        } else {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.songs.length - 1;
            }
            this.loadCurrentSong();
            this.render();
        }
    },
    playRandomSong: function () {
        let newCurrentIndex;
        do {
            newCurrentIndex = Math.floor(Math.random() * this.songs.length)
        } while (newCurrentIndex === this.currentIndex);
        this.currentIndex = newCurrentIndex;
        this.loadCurrentSong();
        this.render();
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
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }
            if (isPause) {
                audio.play();
            }
        }

        backwardBtn.onclick = function () {
            if (isRandom) {
                _this.playRandomSong();
            } else {
                _this.backSong();
            }
            if (isPause) {
                audio.play();
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
        this.render();
        this.loadCurrentSong();
        this.handleEvent();
    }
}
app.start();