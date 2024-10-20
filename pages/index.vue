<template>
  <main class="overflow-hidden overflow-y-auto max-h-[calc(100vh_-_100px)]">
    <!-- <math-field> x=\frac{-b\pm\sqrt{b^2-4ac}}{2a} </math-field> -->
    <section class="text-center home">
      <div class="md:min-h-[calc(100vh_-_100px)] md:pb-0 pb-10">
        <img class="mt-5 mx-auto" src="@/assets/svg/home/main.svg" alt="" />
        <h1 class="lg:text-[40px] md:text-[32px] text-2xl px-10 font-[800]">
          Bizda hammasi qulay va ancha oson
        </h1>
        <p class="md:text-[20px] mt-4 mb-10 px-4">
          Faqatgina telefon raqamni o‘zi yetadi
        </p>
        <UiButton @click="$router.push('/register')" class="bg_orange white"
          >Hisob yaratish</UiButton
        >
      </div>
    </section>
    <section
      class="home_subjects md:px-[100px] px-4 bg-[#F9F9F9] md:py-[52px] py-10"
    >
      <h1
        class="lg:text-[48px] md:text-[36px] text-2xl text-[#2F2F2F] text-center"
      >
        Kurslarimiz
      </h1>
      <p
        class="md:mb-[75px] px-10 mb-5 md:mt-8 mt-4 text-[#454545] text-center"
      >
        Siz uchun eng qiziquvchan bo'lgan kurslar bilan tanishing.
      </p>
      <ul class="flex md:flex-row flex-col md:gap-0 gap-8">
        <li class="min-w-fit md:pr-[100px]">
          <nav class="flex items-center justify-between">
            <a-select
              v-model:value="useLesson.store.class"
              class="md:hidden block min-w-[145px] sr_12"
              :options="
                sinf.map((pro) => ({ value: pro, label: pro + ' sinf' }))
              "
              required
            >
              <template #suffixIcon>
                <img class="ml-2" src="@/assets/svg/icon/arrow.svg" alt="" />
              </template>
            </a-select>
            <div class="flex items-center gap-4">
              <img
                class="md:w-12 w-8"
                src="@/assets/svg/home/arrow_left.svg"
                alt=""
              />
              <img
                class="md:w-12 w-8"
                src="@/assets/svg/home/arrow_right.svg"
                alt=""
              />
            </div>
          </nav>
          <div class="md:block hidden">
            <h2 class="text-2xl font-semibold mt-10 mb-7 _c24">Sinflar</h2>
            <ul class="space-y-5 text-xl _c4d">
              <li
                @click="useLesson.store.class = i"
                v-for="i in 11"
                :class="useLesson.store.class == i ? 'orange' : ''"
                class="cursor-pointer"
              >
                {{ i }}-sinf
              </li>
            </ul>
          </div>
        </li>
        <li class="flex _c24 overflow-hidden overflow-x-auto">
          <div
            v-for="(i, index) in useLesson.store.subjects"
            class="md_border_c8d !border-0 !border-l px-5 pt-6 md:pb-[52px] pb-[70px] min-w-fit"
          >
            <h1 class="md:text-2xl text-xl">{{ i.title }}</h1>
            <img
              class="h-[160px] md:w-[360px] w-[320px] object-cover rounded-[10px] mb-6 mt-12"
              src="@/assets/svg/image/subject.svg"
              alt=""
            />
            <ul class="flex gap-10 mb-10">
              <ul class="space-y-[14px]">
                <li class="text-lg">
                  {{ i.lessonsCount[useLesson.store.class - 1] }} dars
                </li>
                <li class="text-sm">Mavzular soni</li>
              </ul>
              <ul class="space-y-[14px]">
                <li class="text-lg">
                  <span
                    v-for="i in formatSecondsToHours(
                      i.totalDuration[useLesson.store.class - 1]
                    )"
                    >{{ i }}</span
                  >
                </li>
                <li class="text-sm">Davomiyligi</li>
              </ul>
            </ul>
            <UiButton @click="$router.push('/lessons')" class="bg_orange white"
              >Kursga yozilish</UiButton
            >
          </div>
        </li>
      </ul>
    </section>
    <section class="home_page2 py-[60px] md:px-[100px] px-4">
      <h1
        class="lg:text-[48px] md:text-[36px] text-2xl text-[#2F2F2F] text-center"
      >
        Natijalar bilan tanishing
      </h1>
      <p class="md:mb-[75px] mb-8 md:mt-8 mt-4 text-[#454545] text-center">
        Siz ham faol o‘rganuvchilar qatoriga qo‘shiling.
      </p>
      <ul class="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        <li class="space-y-8 home_card_shadow p-8 bg-white r_16">
          <div class="flex items-center gap-5">
            <img src="@/assets/svg/home/users.svg" alt="" />
            <p>Umumiy foydalanuvchilar</p>
          </div>
          <p class="text-[32px] font-bold">
            {{ useUser.store.total_count.total_users }}
          </p>
        </li>
        <li
          v-for="(i, index) in roles"
          class="space-y-8 home_card_shadow p-8 bg-white r_16"
        >
          <div class="flex items-center gap-5">
            <img src="@/assets/svg/home/users.svg" alt="" />
            <p>{{ i.uz }}lar soni</p>
          </div>
          <p class="text-[32px] font-bold">
            {{
              useUser.store.total_count.user_data
                ? useUser.store.total_count.user_data[i.role]
                : ""
            }}
          </p>
        </li>
      </ul>
    </section>
    <section class="md:px-[100px] px-4 home_page2 py-[60px]">
      <h1
        class="lg:text-[48px] md:text-[36px] font-extrabold px-10 text-2xl text-[#2F2F2F] text-center"
      >
        Savollaringizga javob oling
      </h1>
      <p
        class="md:mb-[75px] mb-6 md:mt-8 mt-4 text-[#454545] px-10 text-center"
      >
        Quyida ko‘p berilgan savollar va ularning javoblari berilgan
      </p>
      <a-collapse
        class="aside home_page"
        :bordered="false"
        v-model:activeKey="store.question_collapse"
        style="background: rgb(255, 255, 255)"
        accordion
      >
        <a-collapse-panel v-for="(i, index) in questions" :key="index">
          <template #header>
            <div
              class="flex justify-between items-center md:p-[18px] p-4 gap-1 w-full cursor-pointer duration-300"
            >
              <p class="text-lg">{{ index + 1 }}. {{ i[0] }}</p>
              <img
                :class="store.question_collapse == index ? 'rotate-180' : ''"
                class="duration-300"
                src="@/assets/svg/navbar/arrow.svg"
                alt=""
              />
            </div>
          </template>
          <pre class="p-[18px] pt-0 whitespace-pre-line">{{ i[1] }}</pre>
        </a-collapse-panel>
      </a-collapse>
    </section>
    <section
      class="md:pb-20 pb-10 md:px-[20%] px-[10px] md:pt-[50px] pt-[20px] bg-[#F5F5F5]"
    >
      <h1
        class="lg:text-[48px] md:text-[36px] text-2xl lh_120 text-[#2F2F2F] text-center"
      >
        Aloqa
      </h1>
      <p
        class="md:text-2xl text-md md:mb-[75px] px-10 mb-10 md:mt-8 mt-4 text-[#454545] text-center"
      >
        Iltimos, bizga xabar qoldiring. Bizning jamoamiz imkon qadar tezroq siz
        bilan bog'lanadi.
      </p>
      <form
        class="home_card_shadow bg-white r_16 md:pt-10 pt-7 md:px-[20%] px-5 md:pb-[160px] pb-5"
      >
        <p class="md:text-md text-sm mb-[30px]">
          Telefon raqamingizni yozib qoldiring, biz sizga qoʻngʻiroq qilamiz va
          birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz
        </p>
        <input
          type="text"
          placeholder="Ismingiz"
          class="b_cf5 border_ced mb-6"
        />
        <input
          type="tel"
          placeholder="+998 00 000 0000"
          class="b_cf5 border_ced"
        />
        <a-checkbox class="gap-2 mt-10 mb-6" v-model:checked="checked"
          ><p class="text-sm _c55">
            Shaxsiy ma'lumotlarni qayta ishlanishiga roziman
          </p></a-checkbox
        >
        <UiButton class="bg_orange white block md:w-fit w-full"
          >So‘rov yuborish</UiButton
        >
      </form>
    </section>
  </main>
</template>

<script setup>
import { verifyToken } from "~/composables";
const { formatSecondsToHours } = useFormatter();

// import 'mathlive/dist/mathlive-fonts.css';
// import 'mathlive/dist/mathlive-core.css';
import { MathfieldElement } from "mathlive";
import { roles } from "@/constants";
import { useLessonStore, useLoadingStore, useUserStore } from "~/store";
const useLesson = useLessonStore();
const { verifyAuthToken } = verifyToken();
const isLoading = useLoadingStore();
const useUser = useUserStore();
useUser.countUsers();
useLesson.getSubjects();
verifyAuthToken();

const store = reactive({
  question_collapse: [],
});

const questions = [
  [
    "“IlmNur” qanday loyiha?",
    `Maktab darsliklari, Universitetga tayyorlash, IT sohasiga oid hamda boshqa barcha kerakli bo'lgan kurslarni onlayn tarzda, bosqichma-bosqich testlar asosida o'rganishingiz mumkin.

1. Maktab darsliklari - 1-11 sinflarda o'tiladigan darsliklarni o'zlashtirishingiz mumkin
2. Universitetga tayyorlash kurslari - 5-sinfdan yuqori o'quvchilar uchun maxsus ixtisoslashtirishgan darsliklarni topishingiz mumkin
3. IT sohasiga oid kurslar - 5-sinfdan yuqori o'quvchilar uchun IT sohasiga oid barcha kurslarni onlayn tarzda o'rganishingiz mumkin
`,
  ],
  [
    "Onlayn ta'limning qulayligi nimada?",
    "Siz o'zingizga qulay vaqt va joydan turib ilm olishingiz va yaxshi universitetlarga o'qishga kirishingiz hamda yaxshi kasb egasi bo'lishingiz mumkin.",
  ],
  [
    "Loyihaning o'ziga xosligi nimada?",
    `Siz bu platforma orqali barcha maktab darliklari hamda rivojlanib borayotgan IT sohasiga oid bilimlarni istalgan vaqtda olishingiz hamda nufuzli kompaniyalarga ishga kirishingiz mumkin.
    
Shuningdek, dars davomida o'zingizni qiziqtirgan savollaringizga javob topishingiz va o'qituvchilar bilan hafta davomida onlayn video chatlarda qatnashib qo'shimcha savollarga javob olishingiz mumkin`,
  ],
  [
    "Loyihaning asosiy maqsadi nima?",
    "Loyihamizning asosiy maqsadi - Maktab darsliklarini oson va qulay tarzda o'rganish, o'quvchilarga zamonaviy va rivojlanib borayotgan IT sohasiga oid bilimlarni yetkazib berishdan iborat",
  ],
  [
    "Loyihada darslar kim tomonidan olib boriladi?",
    "Loyihamizdagi darslar uchun maxsus o'qituvchilar biriktiriladi, va siz dars davomida qo'shimcha fikrlaringizni va o'zingizni qiziqtirgan savollaringizga maxsus chatlar va rejalashtirilgan onlayn video chatlar orqali javob olishingiz mumkin bo'ladi",
  ],
  [
    "O'quvchilar uchun qanday qulayliklar mavjud?",
    `1. O'zingizga qulay vaqt va joydan turib o'rganish
2. Darslarni qayta-qayta ko'rish orqali yanada tushunish
3. Bosqichma-bosqich davom etish
3. Har bir darsdan keyin maxsus testlar
4. Maxsus chatlar orqali o'zingizni qiziqtirgan savollarga javob olish
5. Hafta davomida onlayn video chatlar
6. Qiziqarli musobaqalar
7. Shaxmat, zakovat va boshqa zehnni orttiruvchi turli o'yinlar`,
  ],
  [
    "Loyihaning qulayliklari?",
    `Loyihamiz ota-onalar, o'quvchilar, o'qituvchilar, maktablar uchun qulayliklari mavjud
    
Ota-onalar uchun:
Ota-onalar farzandlarini qaysi fanga qiziqishini bilib olishlari va kun davomida farzandining reytingini kuzatib borish mumkin
1. Qaysi sohaga qiziqishi
2. Testlardan qancha ball to'plagani
3. Sinfdoshlaridan qanday o'rinda ekanligi

O'qituvchilar uchun:
O'qituvchilar qaysi o'quvchi qaysi bosqichdan o'ta olmayotganini ko'rishi va shu mavzuga o'quvchilar qiynalishini kuzatib borishi va o'z ustida ishlashi mumkin
1. O'quvchilarning o'zlashtirish darajasi
2. Qaysi o'quvchiga ko'proq e'tibor qaratishi

Maktablar uchun:
Barcha maktablarni umumiy holda reytingini ko'rish yoki uni boshqa maktablar bilan solishtish mumkin
1. Maktabning kunlik, oylik, yillik reytinglarini kuzatib borish
2. Boshqa maktablar reytingini kuzatib borish
3. O'qituvchilarni nazorat qilish
4. Maktab unumdorligini oshirish`,
  ],
  [
    "Loyihaning oflayn darslari ham bormi?",
    "Oflayn darslar ham rejalashtirilgan",
  ],
];

const sinf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
</script>

<style lang="scss" scoped>
.home {
  border-bottom: 1px solid #ebebeb;
  background: linear-gradient(180deg, rgba(245, 245, 245, 0) 0%, #f5f5f5 100%);
}
</style>
