const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus(); /*این متد برای  هر تگی اعمال شود وقتی به صفحه مرورگر میرویم اشاره گر ماوس به طور اتوماتیک روی آن تگ قرار میگیرد*/

textarea.addEventListener('keyup', function(e){
    createTags(e.target.value);

    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 10);


        randomSelect()
    }
});

function createTags(input){
    const tags = input.split(',')/*رشته ها را با علامتی که درون پرانتز آن قرار میدهیم از هم جدا کرده و به صورت اعضای یک آرایه جدید درمی آورد پس الان با گذاشتن هر کاما در پایان هر کاراکتر در واقع عضو جدیدی از آرایه ساخته شده توسط این متد را می سازیم split(',') متد */.filter((tag) => tag.trim() !== '').map((tag) => tag.trim()) 
    
    tagsEl.innerHTML = '';

    tags.forEach((tag) => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl)

    })
}

function randomSelect(){
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100);

    }, times * 100);

}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}