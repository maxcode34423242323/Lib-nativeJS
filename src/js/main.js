import './lib/lib';
import $ from './lib/lib';

$('#first').on('click', ()=> {
    $('div').eq(1).fadeToggle(800);
});
$('[data-count="second"]').on('click', ()=> {
    $('div').eq(2).fadeToggle(800);
});
$('button').eq(2).on('click', ()=> {
    $('.w-500').fadeToggle(800);
});
$('#trigger').click(()=> {
    $('#trigger').createModal({
        text: {
            title: 'Modal title',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem unde nisi, cum dolorem culpa aperiam dolor animi aut impedit soluta amet totam, veniam nulla accusamus quae, possimus ullam sit aliquam.'
        },
        btns: {
            count: 3,
            settings: [
                [
                    'Close',
                    ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'Save changes',
                    ['btn-success'],
                    false,
                    () => {
                        alert('Data save');
                    }
                ],
                [
                    'Another btn',
                    ['btn-warning', 'ml-10'],
                    false,
                    () => {
                        alert('Data change');
                    }
                ],
            ]
        }
    });
});