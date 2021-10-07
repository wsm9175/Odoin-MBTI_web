//qna 리스트 생성

// version1
const qnaVer1_list  = [
      {
            id:1,
            q: '경상감사가 심장이 없는 기이한 시체로 발견됐다. 마을 사람들은 괴물의 소행이라며 수군거린다.',
            a: [
                  { answer : '괴물..? 설마...', type: [ 'odoin' ] },
                  { answer : '에이 요즘 세상에 괴물이 어딨어~ ', type: ['human'] }
            ]
      },
      {
            id:5,
            q: '알고보니 범가가 괴물, 오도인이라고 한다. 오도인은 21일 주기로 심장을 먹어야만 인간의 형상을 유지할 수 있는 괴물. 이때 나의 반응은?' ,
            a: [
                  { answer : '인간이 동물을 사냥해 먹는 거랑 똑같은 거 아닌가?', type: [ 'odoin' ] },
                  { answer : '아니, 심장을 먹는다고? 내가 여태 괴물들이랑 살고있었던거야?!', type: ['human'] }
            ]
      },
      {
            id:6,
            q: '사람들은 회의를 하며 오도인들을 몰살할 계획을 세우는데...' ,
            a: [
                  { answer : '우리에게 해가 될 게 분명해요… 어쩔 수 없이 죽여야 해요!', type: [ 'human' ] },
                  { answer : '그렇지만 그들도 살기 위해서 발버둥치는 게 아닐까요….?', type: ['odoin'] }
            ]
      },
      {
            id:8,
            q: '배가 고프다. 이 고기를 먹어야 될까?' ,
            a: [
                  { answer : '맛있겠다! 배고팠는데… 다행이야!', type: [ 'human' ] },
                  { answer : '냄새가 수상해… 배가 고파도 아무거나 먹을 수는 없지.', type: ['odoin'] }
            ]
      },
      {
            id:10,
            q: '평소 오도인으로 밝혀진 이들에 대한 마을 사람들의 증언을 구한다.' ,
            a: [
                  { answer : '오도인들은 인간과 다를 바 없어. 그저 우리와 같은 백성일 뿐이야', type: [ 'human' ] },
                  { answer : '그래도 사람을 해칠 수 있는 괴물을 그냥 두는 건 위험해…! 아무리 우리를 도와줬다지만… 좀....', type: ['odoin'] }
            ]
      }
]
// version2
const qnaVer2_list = [
      {
            id:2,
            q: '경상감사의 시체 주위에는 금은보화들이 널려있다. 평생 만져보지도 못할 값비싼 물건들....',
            a: [
                  { answer : '하나만 몰래 주머니에 넣자…! 아무도 모를거야…!', type: [ 'bad' ] },
                  { answer : '관아에서 회수할 때까지 기다리자! ', type: ['good'] }
            ]
      },
      {
            id:3,
            q: '어사가 경상감사의 시체 주변에 있었던 나에게 점점 다가온다. 이윽고 내게 수사의 도움을 요청하는데...' ,
            a: [
                  { answer : '범가에 가면 조언을 얻을 수 있을 거예요! (범가를 가리키며)', type: [ 'good' ] },
                  { answer : '에잉 귀찮아. 양반네들이 나한테 뭘 해줬다고.', type: ['bad'] }
            ]
      },
      {
            id:4,
            q: '문경에서 성품 좋기로 유명한 범가의 가주, 범수환. 알고보니 그자가 경상감사를 살해한 범인이라고 한다.' ,
            a: [
                  { answer : '에이 잡놈의 자식. 우릴 도와줄 때부터 꿍꿍이가 있었던 거야!', type: [ 'bad' ] },
                  { answer : '아니야… 나는 소문보다 내가 직접 본 수환님을 믿어!', type: ['good'] }
            ]
      },
      {
            id:7,
            q: '오도인이 다른 오도인을 언급하며 이야기한다. 혹시 사람을 죽이지 않는 오도인이 있는 걸까?' ,
            a: [
                  { answer : '오도인도 모두 다 같지는 않을거야…', type: [ 'good' ] },
                  { answer : '그럴리가! 오도인은 모두 살육을 즐기는 괴물이야! 믿으면 안돼!', type: ['bad'] }
            ]
      },
      {
            id:9,
            q: '마을을 재건하기 위해 관아에서 사람을 모집한다고 한다.' ,
            a: [
                  { answer : '마을의 평화를 되찾고 싶어! 당장 도와야지!', type: [ 'good' ] },
                  { answer : '나 살기도 바쁜데… 돕는 건 좀...', type: ['bad'] }
            ]
      }
]

const storyList =[
      {
            id: 1,
            story : [
                  {story_text : '1769년 문경. 마을에 비명 소리가 울려퍼진다.'},
                  {story_text : '“꺄악-”'},
                  {story_text : '서둘러 광장으로 달려나가보니 사람들이 광장에서 무언가를 둘러싸고 있다.'}
            ]
      },
      {
            id: 2,
            story : [
                  {story_text : '경상감사의 시체 주변을 맴돌고 있는 사람들.'},
                  {story_text : '어느새 사람들은 시체가 아닌 경상감사 주변에 흩뿌려진 금은보화에 주목한다. '}
            ]
      },
      {
            id: 3,
            story : [
                  {story_text : '비켜라!'},
                  {story_text : '결국 경상감사의 시체와 주변의 금은보화는 관리와 병사들이 나타나 다 수거해간다. '},
                  {story_text : '시간이 흘러, 다음날.\n 이 사건을 해결하기 위해 한양에서 어사가 파견된다. \n 그 어사는 경상감사 주변에 있었던 사람들을 차근차근 수소문하기 시작하는데..'}
            ]
      },
      {
            id: 4,
            story : [
                  {story_text : '며칠 뒤, 마을에 벽보가 붙는다.'},
                  {story_text : '웅성웅성...이게 무슨 일이래…?'},
            ]
      },
      {
            id: 5,
            story : []
      },
      {
            id: 6,
            story : [
                  {story_text : '벽보가 붙고 범가 사람들은 잡혀 옥에 갇히게 된다. \n허나 괴물의 힘으로 대부분의 범가 사람들은 잡히지 않고 도망간다. '},
                  {story_text : '그 뒤, 도망친 오도인들이 사람을 죽인다는 소문이 파다하다.'},
                  {story_text : '“괴물새끼들…..! 나랑 오도인들을 죽이러 갈 사람 없소?!”'}
            ]
      },
      {
            id: 7,
            story : [
                  {story_text : '그 때! 한 오도인이 나타나 백성들을 무자비하게 죽이기 시작한다.'},
                  {story_text : '살려주세요...제발 목숨만은… \n역시 수환은 인간들을 선택하면 안됐어.'},
            ]
      },
      {
            id: 8,
            story : [
                  {story_text : '나는 겨우 도망쳐 집으로 돌아왔다.'},
                  {story_text : '두려움에 떨고 있는 그때, 누군가 집앞을 다녀간듯 하다.\n집 앞을 자세히 보니 무언가 놓여져있는데… 다름 아닌 고기다!'},
            ]
      },
      {
            id: 9,
            story : [
                  {story_text : '며칠 후, 오도인과 군사들 간에 큰 전쟁이 있었다.'},
                  {story_text : '마을의 평화를 다시 되찾고 싶은데…'},
            ]
      },
      {
            id: 10,
            story : [
                  {story_text : '전쟁에서 승리를 얻은 병사들은 조정으로 복귀한다.'},
                  {story_text : '그렇게 조정에서 오도인들의 처분을 논의하게 된다.'},
                  {story_text : '문경 마을 백성들의 증언이 필요하다는데…'}
            ]
      }
]

const arr_img = [
      {
            id : 1,
            storyImages:[
                  {storyImage: '/image1'},
                  {storyImage: '/image1'},
                  {storyImage: '/image1'}
            ]
      },
      {
            id : 2,
            storyImages:[
                  {storyImage: '/image2'},
                  {storyImage: '/image2'},
                  {storyImage: '/image2'}
            ]
      },
      {
            id : 3,
            storyImages:[
                  {storyImage: '/image3'},
                  {storyImage: '/image3'},
                  {storyImage: '/image3'}
            ]
      },
      {
            id : 4,
            storyImages:[
                  {storyImage: '/image4'},
                  {storyImage: '/image4'},
                  {storyImage: '/image4'}
            ]
      },
      {
            id : 5,
            storyImages:[
                  {storyImage: '/image5'},
                  {storyImage: '/image5'},
                  {storyImage: '/image5'}
            ]
      },
      {
            id : 6,
            storyImages:[
                  {storyImage: '/image6'},
                  {storyImage: '/image6'},
                  {storyImage: '/image6'}
            ]
      },
      {
            id : 7,
            storyImages:[
                  {storyImage: '/image7'},
                  {storyImage: '/image7'},
                  {storyImage: '/image7'}
            ]
      },
      {
            id : 8,
            storyImages:[
                  {storyImage: '/image8'},
                  {storyImage: '/image8'},
                  {storyImage: '/image8'}
            ]
      },
      {
            id : 9,
            storyImages:[
                  {storyImage: '/image9'},
                  {storyImage: '/image9'},
                  {storyImage: '/image9'}
            ]
      },
      {
            id : 10,
            storyImages:[
                  {storyImage: '/image10'},
                  {storyImage: '/image10'},
                  {storyImage: '/image10'}
            ]
      },
]


// 결과 리스트
const infoList = [
      {
            id:1,
            name: '착한 오도인',
            desc: ''
      },
      {
            id:2,
            name: '나쁜오도인',
            desc: ''
      },
      {
            id:3,
            name: '착한 인간',
            desc: ''
      },
      {
            id:4,
            name: '나쁜 인간',
            desc: ''
      }
]