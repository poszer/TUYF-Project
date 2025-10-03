/* =========================
   Tabs Switching
   ========================= */
const tabs = document.querySelectorAll('.tab-nav li');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // reset active
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    // set active
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

/* =========================
   Students Carousel (เลื่อนทีละ 3 การ์ด)
   ========================= */
const studentTrack = document.querySelector('.student-track');
const studentDots = document.querySelectorAll('.student-dots .dot');
const studentCards = document.querySelectorAll('.student-card');

let studentIndex = 0;
const studentCardsPerSlide = 3;  // จำนวนการ์ดต่อการเลื่อน
const totalStudentSlides = Math.ceil(studentCards.length / studentCardsPerSlide);

function updateStudentCarousel(index) {
  const cardWidth = document.querySelector('.student-card').offsetWidth;
  const moveX = index * (cardWidth * studentCardsPerSlide);
  studentTrack.style.transform = `translateX(-${moveX}px)`;

  // update dots
  studentDots.forEach(dot => dot.classList.remove('active'));
  if (studentDots[index]) {
    studentDots[index].classList.add('active');
  }
}

// คลิก dot
studentDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    studentIndex = i;
    updateStudentCarousel(studentIndex);
  });
});

// auto slide
setInterval(() => {
  studentIndex++;
  if (studentIndex >= totalStudentSlides) studentIndex = 0;
  updateStudentCarousel(studentIndex);
}, 5000);

/* =========================
   Activities Carousel (เลื่อนทีละ 1 การ์ด แต่แสดง 4 การ์ด)
   ========================= */
const activitiesTrack = document.querySelector('.activities-track');
const prevBtn = document.querySelector('.activity-btn.prev');
const nextBtn = document.querySelector('.activity-btn.next');
const activityCards = document.querySelectorAll('.activity-card');

let activityIndex = 0;
const activityCardsPerSlide = 4; // จำนวนการ์ดที่แสดงต่อครั้ง
const totalActivitySlides = activityCards.length - activityCardsPerSlide + 1; // จำนวนสไลด์สูงสุด

function updateActivitiesCarousel(index) {
  const cardWidth = document.querySelector('.activity-card').offsetWidth + 20; // รวม margin
  const moveX = index * cardWidth;
  activitiesTrack.style.transform = `translateX(-${moveX}px)`;
}

// ปุ่ม Prev
prevBtn.addEventListener('click', () => {
  if (activityIndex > 0) {
    activityIndex--;
    updateActivitiesCarousel(activityIndex);
  }
});

// ปุ่ม Next
nextBtn.addEventListener('click', () => {
  if (activityIndex < totalActivitySlides - 1) {
    activityIndex++;
    updateActivitiesCarousel(activityIndex);
  }
});
