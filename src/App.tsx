import { useState } from "react";

type Category =
  | "목공"
  | "전기"
  | "설비"
  | "욕실"
  | "주방"
  | "도배"
  | "장판"
  | "창호"
  | "외부공사";

type Item = {
  level: "사업자" | "프리렌서" | "팀장";
  name: string;
  area: string;
  phone: string;
  badge?: "추천" | "인증" | "인기";
  specs: string[];
};
const Badge = ({ type }: { type: Item["badge"] }) => {
  if (!type) return null;

  const map = {
    추천: "bg-yellow-300 text-black",
    인증: "bg-blue-500 text-white",
    인기: "bg-red-500 text-white",
  };

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-bold ${map[type]}`}
    >
      {type}
    </span>
  );
};

export default function App() {

  const [selectedCategory, setSelectedCategory] =
    useState<Category>("목공");
const [showManager, setShowManager] = useState(false);
const [toast, setToast] = useState<string | null>(null);
const copyText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);

    setToast("복사 완료 👍");

    setTimeout(() => {
      setToast(null);
    }, 1500);

  } catch (e) {
    setToast("복사 실패 😢");

    setTimeout(() => {
      setToast(null);
    }, 1500);
  }
};

  const data: Record<Category, Item[]> = {
  목공: [
  {
    level: "팀장",
    name: "이영무",
    area: "청주",
    phone: "tel:01054643944",
    specs: ["칸막이공사","석고시공","목작업","합판작업","외부목작업"],
  },
  {
    level: "프리렌서",
    name: "권혁만",
    area: "청주",
    phone: "tel:01027565572",
    specs: ["칸막이공사","석고시공","목작업","합판작업","외부목작업"],
  },
  {
    level: "사업자",
    name: "송영성",
    area: "수곡동",
    phone: "tel:01082595898",
    specs: ["칸막이공사","석고시공","목작업","합판작업","외부목작업"],
  },
  {
    level: "팀장",
    name: "김동진",
    area: "효촌",
    phone: "tel:01040775667",
    specs: ["칸막이공사","석고시공","목작업","합판작업","외부목작업"],
  },
  {
    level: "프리렌서",
    name: "박길수",
    area: "진천",
    phone: "tel:01063154972",
    specs: ["칸막이공사","석고시공","목작업","합판작업","외부목작업"],
  },
  {
    level: "프리렌서",
    name: "박희석",
    area: "가경동",
    phone: "tel:01051213301",
    specs: ["칸막이공사","석고시공","목작업","합판작업","외부목작업"],
  },
  {
    level: "팀장",
    name: "이명수",
    area: "진천",
    phone: "tel:01055601801",
    specs: ["칸막이공사","석고시공","목작업","합판작업","외부목작업"],
  },
  {
    level: "팀장",
    name: "이석훈",
    area: "가경동",
    phone: "tel:01089467050",
    specs: ["칸막이공사","석고시공","목작업","합판작업","외부목작업"],
  },
  {
    level: "프리렌서",
    name: "장정호",
    area: "용암동",
    phone: "tel:01042970010",
    specs: ["칸막이공사","석고시공","목작업","합판작업","외부목작업"],
  },
],
  전기: [
  {
    level: "사업자",
    name: "인성전기",
    area: "육거리",
    phone: "tel:01088291187",
    specs: ["전기수리","누전","차단기","배선","조명"],
  },
  {
    level: "프리렌서",
    name: "박영득",
    area: "수곡동",
    phone: "tel:01054663561",
    specs: ["전기수리","누전","차단기","배선","조명"],
  },
  {
    level: "프리렌서",
    name: "홍길동",
    area: "청주",
    phone: "tel:01023234789",
    specs: ["전기수리","누전","차단기","배선","조명"],
  },
  {
    level: "프리렌서",
    name: "최연호",
    area: "청주",
    phone: "tel:01023236786",
    specs: ["전기수리","누전","차단기","배선","조명"],
  },
],
  설비: [
  {
    level: "사업자",
    name: "에이티설비",
    area: "가경동",
    phone: "tel:0432727353",
    specs: ["배관","누수","수전","하수구","설비"],
  },
  {
    level: "프리렌서",
    name: "이한근",
    area: "내덕동",
    phone: "tel:01096820082",
    specs: ["배관","누수","수전","하수구","설비"],
  },
  {
    level: "프리렌서",
    name: "추연호",
    area: "모충동",
    phone: "tel:01071677551",
    specs: ["배관","누수","수전","하수구","설비"],
  },
  {
    level: "프리렌서",
    name: "배관",
    area: "율량동",
    phone: "tel:01096878596",
    specs: ["배관","누수","수전","하수구","설비"],
  },
  {
    level: "프리렌서",
    name: "최병이",
    area: "강서동",
    phone: "tel:01054915435",
    specs: ["배관","누수","수전","하수구","설비"],
  },
],

  욕실: [
  {
    level: "사업자",
    name: "이웃타일",
    area: "사창동",
    phone: "tel:01025936334",
    specs: ["타일시공","욕실리모델링","줄눈","방수","타일보수"],
  },
  {
    level: "사업자",
    name: "오색타일",
    area: "청주",
    phone: "tel:0432720008",
    specs: ["타일시공","욕실리모델링","줄눈","방수","타일보수"],
  },
  {
    level: "프리렌서",
    name: "최병학",
    area: "운천동",
    phone: "tel:01031062828",
    specs: ["타일시공","욕실리모델링","줄눈","방수","타일보수"],
  },
  {
    level: "프리렌서",
    name: "김기범",
    area: "사창동",
    phone: "tel:01096366842",
    specs: ["타일시공","욕실리모델링","줄눈","방수","타일보수"],
  },
],

  주방: [
  {
    level: "사업자",
    name: "예림씽크",
    area: "척산",
    phone: "tel:01055956740",
    specs: ["주방시공","싱크대","상판교체","수납장","주방리모델링"],
  },
  {
    level: "사업자",
    name: "동원씽크",
    area: "척산",
    phone: "tel:01021823917",
    specs: ["주방시공","싱크대","상판교체","수납장","주방리모델링"],
  },
  {
    level: "프리렌서",
    name: "대리석시공",
    area: "척산",
    phone: "tel:01066210804",
    specs: ["주방시공","대리석","상판교체","주방보수","주방리모델링"],
  },
],

  도배: [
  {
    level: "프리렌서",
    name: "최명옥",
    area: "척산",
    phone: "tel:01054911666",
    specs: ["도배","장폭합지","실크벽지","부분도배","곰팡이제거"],
  },
  {
    level: "프리렌서",
    name: "이성옥",
    area: "가경동",
    phone: "tel:01088461533",
    specs: ["도배","장폭합지","실크벽지","부분도배","곰팡이제거"],
  },
  {
    level: "프리렌서",
    name: "김희용",
    area: "가경동",
    phone: "tel:01054673173",
    specs: ["도배","장폭합지","실크벽지","부분도배","곰팡이제거"],
  },
  {
    level: "프리렌서",
    name: "진구엄마",
    area: "분평동",
    phone: "tel:01092453441",
    specs: ["도배","장폭합지","실크벽지","부분도배","곰팡이제거"],
  },
],
  장판: [
  {
    level: "사업자",
    name: "고려상재",
    area: "우암동",
    phone: "tel:0432538100",
    specs: ["장판","데코타일","마루보수","바닥시공","바닥보수"],
  },
  {
    level: "사업자",
    name: "은혜상사",
    area: "효촌",
    phone: "tel:0432987071",
    specs: ["장판","데코타일","마루보수","바닥시공","바닥보수"],
  },
],
  창호: [
  {
    level: "사업자",
    name: "일진창호",
    area: "장암동",
    phone: "tel:01092044557",
    specs: ["샷시","창호","방충망","유리교체","창문수리"],
  },
  {
    level: "사업자",
    name: "모든창호",
    area: "가경동",
    phone: "tel:01074515780",
    specs: ["샷시","창호","방충망","유리교체","창문수리"],
  },
  {
    level: "프리렌서",
    name: "장사장",
    area: "장암동",
    phone: "tel:01020444556",
    specs: ["샷시","창호","방충망","유리교체","창문수리"],
  },
],

  외부공사: [
  {
    level: "사업자",
    name: "푸른인테리어",
    area: "수곡동",
    phone: "tel:01091647088",
    badge: "추천",
    specs: ["외부공사","지붕수리","농가주택","리모델링","보수공사"],
  },
  {
    level: "사업자",
    name: "공인목수",
    area: "모충동",
    phone: "tel:01091647088",
    badge: "인증",
    specs: ["농가주택","지붕수리","목조주택","외부공사","보수공사"],
  },
  {
    level: "프리렌서",
    name: "최지천",
    area: "청주",
    phone: "tel:01091647088",
    badge: "인기",
    specs: ["판넬시공","데크공사","다양한보수작업","외부공사","리모델링"],
  },
  {
    level: "사업자",
    name: "우화영 판넬",
    area: "청주",
    phone: "tel:01044173808",
    specs: ["판넬시공","용접","외부공사","지붕보수","보수공사"],
  },
],

};
const workers = Object.entries(data).flatMap(([category, list]) =>
  list.map((item, index) => ({
    ...item,
    id: `${category}-${index}`,
    category,
  }))
);

  const categories = Object.keys(data) as Category[];
  const [selectedPerson, setSelectedPerson] =
    useState<Item | null>(
      data[selectedCategory][0]
    );
const formatPhone = (phone: string) => {
  const num = phone.replace("tel:", "").replace(/[^0-9]/g, "");

  // 휴대폰
  if (num.startsWith("010") && num.length === 11) {
    return num.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  }

  // 청주 지역번호 등
  if (num.startsWith("043") && num.length === 10) {
    return num.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  }

  return num;
};
const filteredWorkers = workers.filter(
  (w) => w.category === selectedCategory
);


  return (
    <div className="min-h-screen flex justify-center bg-white">
      <div className="w-full max-w-md p-4">

        {/* 헤더 */}
        <div className="text-center mb-3">
          <h1 className="text-2xl font-bold tracking-wider">
            집수리 바로매칭
          </h1>

          <p className="text-gray-500 text-sm">
            청주 지역 즉시 연결
          </p>
        </div>

        {/* 카테고리 */}
        <div className="grid grid-cols-3 gap-x-2 gap-y-1 w-full mb-2 border border-gray-400 rounded-xl bg-gray-400 p-1">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => {
  setSelectedCategory(cat);
  setSelectedPerson(data[cat][0] ?? null);
}}
              className={`
                h-14 rounded-xl text-base font-bold
                border border-black
                active:scale-95 transition

                ${
                  idx % 3 === 0
                    ? "translate-x-1"
                    : idx % 3 === 2
                    ? "-translate-x-1"
                    : ""
                }

                ${
                  selectedCategory === cat
                    ? "bg-red-500 text-white"
                    : "bg-white text-gray-800"
                }
              `}
            >
              {cat} ({data[cat].length})
            </button>
          ))}
        </div>

        {/* 배지 안내 */}
        <div className="mb-2 border rounded-xl py-2 bg-gray-100">

  {/* 상단 */}
  <div className="flex justify-between items-center px-3 text-xs font-bold">

    <span>
      추천 · 인증 · 인기 배지 운영중
    </span>

    <button
      onClick={() => setShowManager(!showManager)}
      className="text-blue-600"
    >
      운영자 {showManager ? "▲" : "▼"}
    </button>

  </div>

  {/* 펼침 영역 */}
  {showManager && (
    <div className="mt-3 px-3 space-y-2">

      {/* 전화 */}
      <div className="text-center font-bold">
        📞 010-9164-7088
      </div>

      {/* 버튼 */}
      <div className="flex gap-2 justify-center">

  <a
    href="tel:01091647088"
    className="bg-red-500 text-white px-3 py-1 rounded text-xs"
  >
    전화걸기
  </a>

  <button
    onClick={() => copyText("010-9164-7088")}
    className="bg-black text-white px-3 py-1 rounded text-xs"
  >
    번호복사
  </button>

  <button
    onClick={() =>
      navigator.share({
        title: "집수리 바로매칭",
        text: "청주 지역 집수리 업체 바로 연결",
        url: window.location.href,
      })
    }
    className="bg-green-500 text-white px-3 py-1 rounded text-xs"
  >
    앱 공유
  </button>

</div>

      {/* 안내문 */}
      <div className="text-[11px] text-gray-600 text-center pt-1">
        등록 문의 / 업체 추가 / 정보 수정 가능합니다
      </div>

    </div>
  )}

</div>

        {/* 상세 스펙창 */}
        <div className="flex justify-end mb-2">
  <button
    onClick={() => {
      if (!selectedPerson) return;

      const text = `
${selectedPerson.level} ${selectedPerson.name}
${selectedPerson.area}
${selectedPerson.phone.replace("tel:", "")}
${selectedPerson.specs.join(" / ")}
      `.trim();

      copyText(text);
    }}
    className="text-xs bg-black text-white px-2 py-1 rounded"
  >
    상세정보 복사
  </button>
</div>
        <div className="mb-3 border-2 border-black rounded-xl bg-gray-100 p-3 min-h-[120px]">
  {selectedPerson ? (
    <>
      
      {/* 1️⃣ 이름 + 전화 */}
      {/* 1️⃣ 이름 + 전화 */}
<div className="flex flex-col">

  {/* 1열 */}
  <div className="flex items-center gap-2 text-base font-bold">
    <span>{selectedPerson.level}</span>
    <span>{selectedPerson.name}</span>
    <span className="text-blue-700">
      {formatPhone(selectedPerson.phone)}
    </span>
  </div>

  {/* 2열 */}
  <div className="flex items-center gap-2 mt-1">
    <div className="text-base font-bold text-black">
      {selectedPerson.area}
    </div>

    <Badge type={selectedPerson.badge} />
  </div>

</div>

      {/* 3️⃣ 스펙 (여기 추가 위치) */}
      <div className="flex flex-wrap gap-1 mt-3">
  {selectedPerson.specs.map((spec) => (
    <span
      key={spec}
      className="text-xs bg-gray-200 px-2 py-[2px] rounded-full"
    >
      {spec}
    </span>
  ))}
</div>

      

    </>
  ) : (
    <div className="text-center text-gray-500">
      등록된 업체가 없습니다
    </div>
  )}
</div>

        {/* 리스트 */}
        <div className="h-[420px] overflow-y-auto space-y-2">

          {filteredWorkers.map((item, idx) => (
            <div
  key={idx}
  onClick={() => setSelectedPerson(item)}
className={`flex overflow-hidden rounded-xl border-2 shadow-sm cursor-pointer
  transition-all duration-200 hover:scale-[1.01] hover:shadow-md

  ${
    selectedPerson?.name === item.name
  ? "bg-yellow-50 border-red-500 scale-[1.01] shadow-md"
  : "bg-white border-gray-800"
  }
`}
>
              {/* 왼쪽 */}
              <div className="w-3/4 p-3 bg-white">
                <div className="font-bold text-base flex items-center gap-2">
  {item.level} {item.name}
  <Badge type={item.badge} />
</div>

                <div className="text-sm text-gray-600">
                  {item.area}
                </div>
              </div>

              {/* 오른쪽 */}
              <a
                href={item.phone}
                onClick={(e) => e.stopPropagation()}
                className="w-1/4 bg-red-500 text-white font-bold flex items-center justify-center"
              >
                전화
              </a>
            </div>
          ))}
{toast && (
  <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-lg z-50">
    {toast}
  </div>
)}
        </div>

      </div>
    </div>
  );
}