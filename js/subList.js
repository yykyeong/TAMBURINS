$(function(){




//제품
    for (let i = 0; i < $('.itemCapacity button').length; i++){
        $('.itemCapacity button').eq(i).on('click',function(){
		$(this).parent().parent().find("button").removeClass('active');
        $('.itemCapacity button').eq(i).addClass('active');
		$(this).parent().parent().find("img").removeClass('active');
        $('.itemImg img').eq(i).addClass('active');
		$(this).parent().parent().find(".price").removeClass('active');
        $('.itemInfo .price').eq(i).addClass('active');
        });
    }




    var best_products = [
        {id:0, img:'img/best01.jpg',
        scent: '무화과나무 | 엠브레트 씨앗 | 달콤 씁쓸한', name: '퍼퓸핸드 FEY9', price: '18,000'},
        {id:1, img:'img/best02.jpg', 
        scent : '무화과나무 | 엠브레트 씨앗 | 달콤 씁쓸한', name: '퍼퓸 핸드케어 미니 세트 FEY9',price: '26,500'},
        {id:2, img:'img/best03.jpg', 
        scent : '씁쓸한 오렌지 | 시더우드 | 달콤한 리코라이스', name: '바디 워시&로션 BIGALICO', price: '68,000'},
        {id:4, img:'img/best04.jpg', 
        scent : '씁쓸한 오렌지 | 시더우드 | 달콤한 리코라이스', name: '바디로션 BIGALCO', price: '38,500'},
        {id:5, img:'img/best05.jpg', 
        scent : '샌달우드 | 패츌리 | 흙 내음', name: '퍼퓸드 핸드앤바디 워시 000', price: '32,000'},
        {id:6, img:'img/best06.jpg', 
        scent : '회귀의 향 | 나무껍질의 눈물 | 내적 평온', name: 'MULBERRY LEAVES', price: '65,000'}
    ];

        //템플릿
        best_products.forEach((bestprd, i)=>{
            var bestItems = 
            `<div class="shop_box">
                <div class="shop_item">
                    <div class="itemImg">
                        <img class="active" src=${bestprd.img} alt="best">
                    </div>
                    <div class="itemInfo">
                        <p class="scent">${bestprd.scent}</p>
                        <p class="name">${bestprd.name}</p>
                        <p class="price active">${bestprd.price}원</p>
                    </div>
                    <div class="addCart">
                        <button type="button">장바구니에 추가</button>
                    </div>
                </div>
            </div>`;
    
            $('.bestseller').append(bestItems)
        });

    var gift_products = [
        {id:0, img:'img/gItem01.png',
        scent: '샤워리바디워시&로션', name: '바디듀오 BIGALICO', price: '68,000'},
        {id:1, img:'img/gItem02.jpg', 
        scent : '퍼퓸핸드 7가지 향', name: '퍼퓸핸드 미니 7세트',price: '107,000'},
        {id:2, img:'img/gItem03.jpg', 
        scent : '손 소독제 세 가지 향', name: '바디 워시&로션 BIGALICO', price: '68,000'},
        {id:3, img:'img/gItem04.png', 
        scent : '퍼퓸핸드 베스트 향', name: '퍼퓸 핸드 (000+FLOW)', price: '33,500'}
    ]


    // 템플릿
    gift_products.forEach((giftprd, i)=>{
        var giftItems = 
        `<div class="shop_box">
            <div class="shop_item">
                <div class="itemImg">
                    <img class="active" src=${giftprd.img} alt="best">
                </div>
                <div class="itemInfo">
                    <p class="scent">${giftprd.scent}</p>
                    <p class="name">${giftprd.name}</p>
                    <p class="price active">${giftprd.price}원</p>
                </div>
                <div class="addCart">
                    <button type="button">장바구니에 추가</button>
                </div>
            </div>
        </div>`;

        $('.giftSub').append(giftItems)
    });


    var sample_products = [
        {id:0, img:'img/sItem01.jpg',
        scent: '튜브핸드 6가지 향', name: '튜브핸드 샘플 키트', price: '3,500'},
        {id:1, img:'img/sItem02.jpg', 
        scent : '퍼퓸핸드 8가지 향', name: '퍼퓸핸드 샘플 키트',price: '3,000'},
        {id:2, img:'img/sItem03.jpg', 
        scent : '체인핸드 4가지 향', name: '체인핸드 샘플 키트', price: '3,000'},
        {id:3, img:'img/sItem04.jpg', 
        scent : '멀티프래그넌스 8가지 향', name: '페이퍼프래그넌스 샘플 키트', price: '5,000'},
        /*
        {id:4, img:'img/sItem05.jpg', 
        scent : '퍼퓸드 핸드앤바디 3가지 향', name: '워시&에멀전 샘플 키트', price: '품절'},
        {id:5, img:'img/sItem06.jpg', 
        scent : '올팩티브 캔들 3가지 향', name: '캔들 미니 트라이얼 키트 (석고방향제)', price: '품절'}
        */
    ]
 // 템플릿
    sample_products.forEach((sampleprd, i)=>{
        var sampleItems = 
        `<div class="shop_box">
            <div class="shop_item">
                <div class="itemImg">
                    <img class="active" src=${sampleprd.img} alt="best">
                </div>
                <div class="itemInfo">
                    <p class="scent">${sampleprd.scent}</p>
                    <p class="name">${sampleprd.name}</p>
                    <p class="price active">${sampleprd.price}원</p>
                </div>
                <div class="addCart">
                    <button type="button">장바구니에 추가</button>
                </div>
            </div>
        </div>`;

        $('.sampleSub').append(sampleItems)
    });





















































    // 가격정렬
    
    /*
    $('#pricebtn').click(function(){


        products.sort(function(a, b){
            return a.price - b.price
        });
        console.log(products);

        $('.shop_container').html('');

        products.forEach((bestprd, i)=>{
            var bestItems = 
            `<div class="shop_box">
                <div class="shop_item">
                    <div class="itemImg">
                        <img class="active" src=${bestprd.img} alt="best">
                    </div>
                    <div class="itemInfo">
                        <p class="scent">${bestprd.scent}</p>
                        <p class="name">${bestprd.name}</p>
                        <p class="price active">${bestprd.price}원</p>
                    </div>
                    <div class="addCart">
                        <button type="button">장바구니에 추가</button>
                    </div>
                </div>
            </div>`;
            $('.shop_container').append(bestItems)
        });
    
    });
*/


});



