const parameter_number = new URLSearchParams(window.location.search);
        const article_number = parameter_number.get('th');

        function showArticle(num) {
            var article1 = document.getElementById('article1');
            var article2 = document.getElementById('article2');
            var article3 = document.getElementById('article3');
            var article4 = document.getElementById('article4');
            var article5 = document.getElementById('article5');
            var article6 = document.getElementById('article6');
            var article7 = document.getElementById('article7');
            var article8 = document.getElementById('article8');

            switch(num) {
                case '1': 
                    article1.style.display = 'flex';
                    article2.style.display = 'none';
                    article3.style.display = 'none';
                    article4.style.display = 'none';
                    article5.style.display = 'none';
                    article6.style.display = 'none';
                    article7.style.display = 'none';
                    article8.style.display = 'none';
                    break;

                case '2': 
                    article1.style.display = 'none';
                    article2.style.display = 'flex';
                    article3.style.display = 'none';
                    article4.style.display = 'none';
                    article5.style.display = 'none';
                    article6.style.display = 'none';
                    article7.style.display = 'none';
                    article8.style.display = 'none';
                    break;

                case '3': 
                    article1.style.display = 'none';
                    article2.style.display = 'none';
                    article3.style.display = 'flex';
                    article4.style.display = 'none';
                    article5.style.display = 'none';
                    article6.style.display = 'none';
                    article7.style.display = 'none';
                    article8.style.display = 'none';
                    break;

                case '4': 
                    article1.style.display = 'none';
                    article2.style.display = 'none';
                    article3.style.display = 'none';
                    article4.style.display = 'flex';
                    article5.style.display = 'none';
                    article6.style.display = 'none';
                    article7.style.display = 'none';
                    article8.style.display = 'none';
                    break;

                case '5': 
                    article1.style.display = 'none';
                    article2.style.display = 'none';
                    article3.style.display = 'none';
                    article4.style.display = 'none';
                    article5.style.display = 'flex';
                    article6.style.display = 'none';
                    article7.style.display = 'none';
                    article8.style.display = 'none';
                    break;

                case '6': 
                    article1.style.display = 'none';
                    article2.style.display = 'none';
                    article3.style.display = 'none';
                    article4.style.display = 'none';
                    article5.style.display = 'none';
                    article6.style.display = 'flex';
                    article7.style.display = 'none';
                    article8.style.display = 'none';
                    break;

                case '7': 
                    article1.style.display = 'none';
                    article2.style.display = 'none';
                    article3.style.display = 'none';
                    article4.style.display = 'none';
                    article5.style.display = 'none';
                    article6.style.display = 'none';
                    article7.style.display = 'flex';
                    article8.style.display = 'none';
                    break;

                case '8': 
                    article1.style.display = 'none';
                    article2.style.display = 'none';
                    article3.style.display = 'none';
                    article4.style.display = 'none';
                    article5.style.display = 'none';
                    article6.style.display = 'none';
                    article7.style.display = 'none';
                    article8.style.display = 'flex';
                    break;
            }
        }

        window.addEventListener('DOMContentLoaded', function() {
            showArticle(article_number);
        });