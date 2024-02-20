const questions = [
    {
        question:"वर्ष 1829 ई० में सती प्रथा का उन्मूलन किसके द्वारा किया गया था?",
        answers: [
            { text: "लार्ड कर्जन", correct: false},
            { text: "लार्ड वेलेस्ली", correct: false},
            { text: "लार्ड लिटन", correct: false},
            { text: "लार्ड विलियम बैटिक", correct: true},
        ] 
    },

    {
        question:"मुख्यतः किसके प्रयास से सती प्रथा का उन्मूलन हुआ?",
        answers: [
            { text: "ब्रिटिश", correct: false},
            { text: "राजा राममोहन राय", correct: true},
            { text: "धर्म प्रचारक", correct: false},
            { text: "महर्षि कर्वे", correct: false},
        ] 
    },

    {
        question:"'युवा बंगाल आन्दोलन' (Young Bengal Movement) के नेता कौन थे?",
        answers: [
            { text: "राजा राममोहन राय", correct: false},
            { text: "देवेन्द्रनाथ टैगोर", correct: false},
            { text: "हेनरी विवियन डेरोजियो", correct: true},
            { text: "डेविड हेयर", correct: false},
        ] 
    },

    {
        question:"किस धर्म सुधारक की मृत्यु भारत के बाहर हुई थी?",
        answers: [
            { text: "ज्योतिबा फूले", correct: false},
            { text: "राजा राममोहन राय", correct: true},
            { text: "दयानंद सरस्वती", correct: false},
            { text: "रामकृष्ण परमहंस", correct: false},
        ] 
    },

    {
        question:"राजा राममोहन राय ने अपने असाधारण काम की खातिर भारतीय इतिहास में अपनी पहचान बनाई, उनका मुख्य काम इस दिशा में था-",
        answers: [
            { text: "धर्म को ऊँचा उठाना", correct: false},
            { text: "समाज सुधार", correct: true},
            { text: "शिक्षा", correct: false},
            { text: "अंग्रेजी का परिचय", correct: false},
        ] 
    },

    {
        question:"किसे 'आधुनिक भारत का जनक' कहते हैं?",
        answers: [
            { text: "लाला लाजपत राय", correct: false},
            { text: "महात्मा गाँधी", correct: false},
            { text: "राजा राममोहन राय", correct: true},
            { text: "भगत सिंह", correct: false},
        ] 
    },

    {
        question:"राजा राममोहन राय किससे संबंधित नहीं है?",
        answers: [
            { text: "विधवा पुनर्विवाह", correct: false},
            { text: "संस्कृत शिक्षा", correct: true},
            { text: "सती प्रथा", correct: false},
            { text: "अंग्रेजी शिक्षा", correct: false},
        ] 
    },

    {
        question:"भारत में 19वीं सदी का पुनर्जागरण निम्नलिखित में से किस वर्ग तक सीमित था?",
        answers: [
            { text: "राजसी वर्ग", correct: false},
            { text: "उच्च मध्य वर्ग", correct: true},
            { text: "धनी किसान", correct: false},
            { text: "शहरी भूस्वामी", correct: false},
        ] 
    },

    {
        question:"'प्रार्थना समाज' की स्थापना किसकी प्रेरणा के फलस्वरूप हुई?",
        answers: [
            { text: "केशवचन्द्र सेन", correct: false},
            { text: "देवेन्द्रनाथ टैगोर", correct: false},
            { text: "गोपाल हरि देशमुख", correct: false},
            { text: "ईश्वरचन्द्र विद्यासागर ", correct: false},
        ] 
    },

    {
        question:"राजा राममोहन राय के इंग्लैण्ड जाने के पश्चात् किसने ब्रह्म समाज की बागडोर संभाली ?",
        answers: [
            { text: "केशवचन्द्र सेन", correct: true},
            { text: "देवेन्द्रनाथ टैगोर", correct: false},
            { text: "गोपाल हरि देशमुख", correct: false},
            { text: "रामचन्द्र विद्यावागीश", correct: false},
        ] 
    },

    {
        question:"राजा राममोहन राय और डेविड हेयर निम्नलिखित की स्थापना से जुड़े हुए थे-",
        answers: [
            { text: "हिन्दू कॉलेज", correct: true},
            { text: "रिपन कॉलेज", correct: false},
            { text: "एम०ए० ओ० कॉलेज", correct: false},
            { text: "संस्कृत कॉलेज", correct: false},
        ] 
    },

    {
        question:"1815 ई० में निम्नलिखित में से किसने कलकत्ता में 'आत्मीय सभा' की स्थापना की?",
        answers: [
            { text: "राधाकांत देव", correct: false},
            { text: "राममोहन राय", correct: true},
            { text: "ईश्वरचन्द्र विद्यासागर", correct: false},
            { text: "देवेन्द्रनाथ टैगोर", correct: false},
        ] 
    },

    {
        question:"शारदामणी कौन थी?",
        answers: [
            { text: "राजा राममोहन राय की पत्नी", correct: false},
            { text: "रामकृष्ण परमहंस की पत्नी", correct: true},
            { text: "विवेकानंद की माँ", correct: false},
            { text: "केशवचन्द्र सेन की पुत्री", correct: false},
        ] 
    },

    {
        question:"राजा राममोहन राय द्वारा 'ब्रह्म समाज' की स्थापना कब की गई-",
        answers: [
            { text: "1816 में", correct: false},
            { text: "1820 में", correct: false},
            { text: "1828 में", correct: true},
            { text: "1830 में", correct: false},
        ] 
    },

    {
        question:"'तुहफात-उल-मोहवद्दीन' के रचनाकार हैं-",
        answers: [
            { text: "स्वामी विवेकानन्द", correct: false},
            { text: "राजा रामामोहन राय", correct: true},
            { text: "काजी नजरूल इस्लाम", correct: false},
            { text: "दयानंद सरस्वती", correct: false},
        ] 
    },

    {
        question:"महाराष्ट्र के किस सुधारक को 'लोकहितवादी' कहा जात है?",
        answers: [
            { text: "एम०जी०राणाडे", correct: false},
            { text: "गोपाल कृष्ण गोखले", correct: false},
            { text: "पंडिता रमाबाई", correct: false},
            { text: "गोपाल हरिदेशमुख", correct: true},
        ] 
    },

    {
        question:"'ब्रह्म समाज' किस सिद्धांत पर आधारित है?",
        answers: [
            { text: "एकेश्वरवाद", correct: true},
            { text: "बहुदेववाद", correct: false},
            { text: "अनीश्वरवाद", correct: false},
            { text: "अद्वैतवाद", correct: false},
        ] 
    },

    {
        question:"फारसी साप्ताहिक - 'मिरात-उल-अखबार' को प्रकाशित करते थे",
        answers: [
            { text: "लाला लाजपत राय", correct: false},
            { text: "सैयद अहमद खां", correct: false},
            { text: "राजा राममोहन राय", correct: true},
            { text: "मौलाना शिब्ली नोमानी", correct: false},
        ] 
    },

    {
        question:"बाल विवाह प्रथा को नियंत्रित करने हेतु 1872 के सिविल मैरिज एक्ट ने लड़कियों के विवाह की न्यूनतम उम्र निर्धारित किया-",
        answers: [
            { text: "14 वर्ष", correct: true},
            { text: "16 वर्ष", correct: false},
            { text: "18 वर्ष", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में कौन-सा सुमेलित नहीं है?",
        answers: [
            { text: "ए० पांडुरंग-प्रार्थना समाज", correct: false},
            { text: "दयानंद सरस्वती-आर्य समाज", correct: false},
            { text: "राजा राममोहन राय-आदि ब्रह्म समाज", correct: true},
            { text: "स्वामी विवेकानंद-रामकृष्ण मिशन", correct: false},
        ] 
    },

    {
        question:"'वेदों की ओर लौटो' यह नारा किसने दिया था?",
        answers: [
            { text: "राजा राममोहन राय", correct: false},
            { text: "दयानंद सरस्वती", correct: true},
            { text: "विवेकानंद", correct: false},
            { text: "रामकृष्ण परमहंस", correct: false},
        ] 
    },

    {
        question:"इनमें से कौन-सा कथन सही नहीं है?",
        answers: [
            { text: "वर्ष 1829 में विलियम बैंटिक ने सती प्रथा को कानून द्वारा अपराध घोषित कर दिया", correct: false},
            { text: "वर्ष 1856 में सरकार ने कानून बनाया जिसके अनुसार हिन्दू विधवाएँ पुनर्विवाह कर सकती थी", correct: false},
            { text: "वर्ष 1875 में स्वामी दयानंद सरस्वती के द्वारा आर्य समाज की स्थापना की गई", correct: false},
            { text: "राजा राममोहन राय सती प्रथा के समर्थक थे", correct: true},
        ] 
    },

    {
        question:"निम्न में से किस व्यक्ति ने सर्वप्रथम 'स्वराज्य' शब्द का प्रयोग किया और हिन्दी को राष्ट्रभाषा माना?",
        answers: [
            { text: "राजा राममोहन राय", correct: false},
            { text: "स्वामी दयानंद सरस्वती", correct: true},
            { text: "स्वामी सहजानंद", correct: false},
            { text: "बाल गंगाधर तिलक", correct: false},
        ] 
    },

    {
        question:"राजा राममोहन राय निम्नलिखित में से किसके दीवान थे-",
        answers: [
            { text: "डेविड हेयर", correct: false},
            { text: "आर्क राईट", correct: false},
            { text: "डेविड मील", correct: false},
            { text: "विल्यिम डिग्वी", correct: true},
        ] 
    },

    {
        question:"सर्वप्रथम राजाराममोहन राय द्वारा मूर्ति पूजा का विरोध किस पुस्तक के लेखन द्वारा किया गया-",
        answers: [
            { text: "तोहफत-उल-मोहिद्दीन", correct: true},
            { text: "मोहिद्दीन", correct: false},
            { text: "संवाद कोमोदी", correct: false},
            { text: "तोहफत उल मोनोथिस्ट", correct: false},
        ] 
    },

    {
        question:"एकेश्वरवादियों का उपहार नामक प्रसिद्ध पुस्तक का प्रकाशन कब किया गया?",
        answers: [
            { text: "1809", correct: true},
            { text: "1815", correct: false},
            { text: "1817", correct: false},
            { text: "1821", correct: false},
        ] 
    },

    {
        question:"ब्रम्ह समाज के प्रथम विभाजन के बाद केशव गुट को किस नाम से जाना गया?",
        answers: [
            { text: "ब्रम्ह समाज", correct: false},
            { text: "आदि ब्रम्ह समाज", correct: false},
            { text: "भारतीय ब्रम्ह समाज", correct: true},
            { text: "वैदान्त सभा", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से किस संगठन को दक्षिण का ब्रम्ह समाज कहा जाता है?",
        answers: [
            { text: "भारतीय ब्रम्ह समाज", correct: false},
            { text: "वेद समाज", correct: true},
            { text: "प्रार्थना सभा", correct: false},
            { text: "आदि ब्रम्ह समाज", correct: false},
        ] 
    },

    {
        question:"1815 में किस संगठन की स्थापना हुई?",
        answers: [
            { text: "वेद समाज", correct: false},
            { text: "हिन्दू कॉलेज", correct: false},
            { text: "वेदांत सोसाईटी", correct: false},
            { text: "आत्मीय सभा", correct: true},
        ] 
    },

    {
        question:"निम्न में से किसने राजा राममोहन राय को राजा की उपाधि दी?",
        answers: [
            { text: "अकबर प्रथम", correct: false},
            { text: "अकबर द्वितीय", correct: true},
            { text: "रविन्द्रनाथ टैगोर", correct: false},
            { text: "विलियम चतुर्थ", correct: false},
        ] 
    },

    {
        question:". निम्नलिखित में से किस अखबार का संपादन फारसी भाषा में हुआ?",
        answers: [
            { text: "संवाद कौमुरी", correct: false},
            { text: "मिरातुल", correct: true},
            { text: "प्रज्ञा चांद", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से असुमेलित कथन का चयन करें-",
        answers: [
            { text: "संवाद कौमुदी-1821", correct: false},
            { text: "आत्मीय सभा-1815", correct: false},
            { text: "वेद समाज-1872", correct: true},
            { text: "वेदांत सोसाईटी-1816", correct: false},
        ] 
    },

    {
        question:"राजा राममोहन राय द्वारा गठित ब्रम्ह समाज के आदशों का चयन करें - ",
        answers: [
            { text: "एकेश्वर वाद को उपासना", correct: false},
            { text: "मुर्तिपूजा का विरोध", correct: false},
            { text: "अवतारवाद का खण्डन", correct: false},
            { text: "उपरोक्त सभी", correct: true},
        ] 
    },

    {
        question:"राजा राममोहन मृत्योपरांत ब्रम्ह समाज को जिन दो लोगों द्वारा आगे बढ़ाया गया उनका नाम क्या था?",
        answers: [
            { text: "रामचन्द्र वागिस", correct: false},
            { text: "देवेन्द्र नाथ टैगोर", correct: false},
            { text: "महर्शी द्वारिकानाथ टैगोर", correct: false},
            { text: "(a) और (c) दोनों", correct: true},
        ] 
    },

    {
        question:"कैशवचंद सेन ब्रम्ह समाज में शामिल होने से पहले निम्न में से कौन-सा संगठन चलाते थे-",
        answers: [
            { text: "संगत सभा", correct: true},
            { text: "तत्वोबोधिनी", correct: false},
            { text: "वेद समाज", correct: false},
            { text: "आदि ब्रम्ह समाज", correct: false},
        ] 
    },

    {
        question:"निम्न में से किसपे ब्रम्हसमाज का ईसाई करण करने का आरोप लगाया गया था? ",
        answers: [
            { text: "कैशव चंद्र सेन", correct: true},
            { text: "दैवेन्द्रनाथ टैगोर", correct: false},
            { text: "रामचन्द्र वागिश", correct: false},
            { text: "विवेकानन्द", correct: false},
        ] 
    },

    {
        question:"साधारण ब्रम्ह समाज की स्थापना कब हुई?",
        answers: [
            { text: "1872", correct: false},
            { text: "1874", correct: false},
            { text: "1876", correct: false},
            { text: "1878", correct: true},
        ] 
    },

    {
        question:"प्रार्थना समाज में निम्न में से किन कार्यों पर ज्यादा जोर दिया?",
        answers: [
            { text: "विधवा आश्रम खोलना ", correct: false},
            { text: "रात्रि पाठशाला बनाना", correct: false},
            { text: "छुआ-छूत दुर करना", correct: false},
            { text: "उपरोक्त सभी", correct: true},
        ] 
    },

    {
        question:"6 जुलाई, 1942 को वर्धा में महात्मा गांधीजी ने कांग्रेस की कार्यकारी समिति में अपने 'भारत छोड़ो आंदोलन' की चर्चा की, तब उस समिति के अध्यक्ष थे-",
        answers: [
            { text: "राजगोपालाचारी", correct: false},
            { text: "मौलाना अबुल कलाम आजाद", correct: false},
            { text: "जवाहरलाल नेहरू", correct: false},
            { text: "एनी बेसेंट", correct: true},
        ] 
    },

    {
        question:"14 जुलाई, 1942 को कांग्रेस कार्यसमिति द्वारा 'भारत छोड़ो आंदोलन' का प्रस्ताव कहां पारित किया गया?",
        answers: [
            { text: "बंबई", correct: false},
            { text: "वर्धा", correct: true},
            { text: "लखनऊ", correct: false},
            { text: "त्रिपुरा", correct: false},
        ] 
    },

    {
        question:"भारत छोड़ो आंदोलन कब प्रारम्भ हुआ?",
        answers: [
            { text: "9 अगस्त, 1942", correct: true},
            { text: "10 अगस्त, 1943", correct: false},
            { text: "15 अगस्त, 1942", correct: false},
            { text: "16 अगस्त, 1943", correct: false},
        ] 
    },

    {
        question:"भारत छोड़ो आंदोलन कहां से शुरू हुआ था-",
        answers: [
            { text: "साबरमती", correct: false},
            { text: "कलकत्ता", correct: false},
            { text: "बंबई", correct: true},
            { text: "मद्रास", correct: false},
        ] 
    },

    {
        question:"अंग्रेजों के विरूद्ध 'भारत छोड़ो आंदोलन' की घोषणा किस वर्ष की गई?",
        answers: [
            { text: "1940 में", correct: false},
            { text: "1942 में", correct: true},
            { text: "1946 में", correct: false},
            { text: "1936 में", correct: false},
        ] 
    },

    {
        question:"भारत छोड़ो आंदोलन के समय भारत का प्रधान सेनापति कौन था?",
        answers: [
            { text: "लॉर्ड वैवेल", correct: true},
            { text: "लॉर्ड लिनलिथगो", correct: false},
            { text: "लॉर्ड माउण्टबैटन", correct: false},
            { text: "उपर्युक्त में से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"यह कथन हम भारत को या तो आजाद करेंगे या आजादी के प्रयास में दिवंगत होंगे' किससे जुड़ा है?",
        answers: [
            { text: "असहयोग आंदोलन", correct: false},
            { text: "वैयक्तिक सत्याग्रह", correct: false},
            { text: "सविनय अवज्ञा आंदोलन", correct: false},
            { text: "भारत छोड़ो आंदोलन", correct: true},
        ] 
    },

    {
        question:"'करो या मरो' का नारा किसने दिया?",
        answers: [
            { text: "तिलक", correct: false},
            { text: "जवाहरलाल नेहरू", correct: false},
            { text: "भगत सिंह", correct: false},
            { text: "महात्मा गांधी", correct: true},
        ] 
    },

    {
        question:"बलदेव सहाय ने महाधिवक्ता के पद से त्यागपत्र कब दिया?",
        answers: [
            { text: "1942", correct: true},
            { text: "1943", correct: false},
            { text: "1913", correct: false},
            { text: "1911", correct: false},
        ] 
    },

    {
        question:"भारत छोड़ो आंदोलन का नेतृत्व किया था-",
        answers: [
            { text: "बी.आर. अम्बेडकर ने", correct: false},
            { text: "जवाहरलाल नेहरू ने", correct: false},
            { text: "महात्मा गांधी ने", correct: true},
            { text: "वल्लभभाई पटेल ने", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से किन पार्टियों ने 'भारत छोड़ो आंदोलन' का समर्थन नहीं किया था?",
        answers: [
            { text: "हिंदू महासभा ने", correct: false},
            { text: "कम्युनिस्ट पार्टी ऑफ इंडिया ने", correct: false},
            { text: "यूनियनिस्ट पार्टी ऑफ पंजाब ने", correct: false},
            { text: "उपर्युक्त सभी ने", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से किसने 1942 में 'भारत छोड़ो प्रस्ताव' का समर्थन किया था?",
        answers: [
            { text: "ए.के. आजाद", correct: false},
            { text: "राजेंद्र प्रसाद", correct: false},
            { text: "सरदार वल्लभभाई पटेल", correct: true},
            { text: "जवाहरलाल नेहरू", correct: false},
        ] 
    },





];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 