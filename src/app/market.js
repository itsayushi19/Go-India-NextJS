import data from './data.json'

const Market = (open) => {
    console.log(open)
    return (
        <div className="flex flex-col items-center mt-10">
  <div class={`w-[390px] mb-10 h-[350px] rounded overflow-hidden shadow-lg`}>
  <img class="w-full h-[175px]" src="/sunset.jpg" alt="Sunset in the mountains" />
  <div class="px-6 py-4 pb-2">
    <div class="font-bold text-xl mb-2">{data.title2}</div>
    <p class="text-gray-700 text-base">
    {data.content2}
    </p>
  </div>
  </div>
  <div class={`w-[375px] mb-10 h-[350px] rounded overflow-hidden shadow-lg`}>
  <img class="w-full h-[175px]" src="/sunset.jpg" alt="Sunset in the mountains" />
  <div class="px-6 py-4 pb-2">
    <div class="font-bold text-xl mb-2">{data.title2}</div>
    <p class="text-gray-700 text-base">
    {data.content2}
    </p>
  </div>
  </div>
  <div class={`w-[375px] mb-10 h-[350px] rounded overflow-hidden shadow-lg`}>
  <img class="w-full h-[175px]" src="/sunset.jpg" alt="Sunset in the mountains" />
  <div class="px-6 py-4 pb-2">
    <div class="font-bold text-xl mb-2">{data.title2}</div>
    <p class="text-gray-700 text-base">
      {data.content2}
    </p>
  </div>
  </div>
  </div>
    )
}

export default Market