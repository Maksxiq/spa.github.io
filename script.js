 new Vue({
        el: '#app',
        data: {
            verticalItems: []
        },
        created() {
            this.generateLists();
            setInterval(this.updateNumbers, 1000);
        },
        methods: {
            generateLists() {
                for (let i = 0; i < this.getRandomInt(100, 150); i++) {
                    let horizontalList = [];
                    for (let j = 0; j < this.getRandomInt(10, 20); j++) {
                        horizontalList.push(this.getRandomInt(1, 100));
                    }
                    this.verticalItems.push(horizontalList);
                }
            },
            getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            },
            updateNumbers() {
                for (let i = 0; i < this.verticalItems.length; i++) {
                    for (let j = 0; j < this.verticalItems[i].length; j++) {
                        this.verticalItems[i][j] = this.getRandomInt(1, 100);
                    }
                }
            },
            shrinkCell(event) {
                event.target.style.transform = 'scale(0.8)';
            },
            resetCell(event) {
                event.target.style.transform = 'scale(1)';
            }
        }
    });