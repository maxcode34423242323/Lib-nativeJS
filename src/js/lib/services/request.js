import $ from '../core';

$.prototype.get = async function (url, dataTypeAnwser = 'json') {
    try {
        const res = await fetch(url);
        
        switch (dataTypeAnwser) {
            case 'json':
                return await res.json();
            case 'text':
                return await res.text();
            case 'blob':
                return await res.blob();
        }

    } catch (e) {
        console.log(e);
    }
};

$.prototype.post = async function (url , data, dataTypeAnwser = 'text') {
    let res = await fetch(url,{
        method: 'POST',
        body: data
    });
    switch (dataTypeAnwser) {
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case 'blob':
            return await res.blob();
    }
};