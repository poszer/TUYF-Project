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
   Students Carousel (เลื่อนทีละ 1 การ์ด)
   ========================= */
const studentTrack = document.querySelector('.student-track');
const studentDots = document.querySelectorAll('.student-dots .dot');
const studentCards = document.querySelectorAll('.student-card');

let studentIndex = 0;

// อัปเดต carousel ของ Students
function updateStudentCarousel(index) {
  const cardWidth = document.querySelector('.student-card').offsetWidth;
  const moveX = index * cardWidth;
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
  if (studentIndex >= studentCards.length) studentIndex = 0;
  updateStudentCarousel(studentIndex);
}, 5000);

/* =========================
   Activities Carousel (เลื่อนทีละ 1 การ์ด)
   ========================= */
const activitiesTrack = document.querySelector('.activities-track');
const prevBtn = document.querySelector('.activity-btn.prev');
const nextBtn = document.querySelector('.activity-btn.next');
const activityCards = document.querySelectorAll('.activity-card');

let activityIndex = 0;

// อัปเดต carousel ของ Activities
function updateActivitiesCarousel(index) {
  const cardWidth = document.querySelector('.activity-card').offsetWidth + 20; // รวม margin
  const moveX = index * cardWidth;
  activitiesTrack.style.transform = `translateX(-${moveX}px)`;
}

// ปุ่ม Prev
prevBtn.addEventListener('click', () => {
  activityIndex--;
  if (activityIndex < 0) {
    activityIndex = activityCards.length - 1; // วนกลับไปการ์ดสุดท้าย
  }
  updateActivitiesCarousel(activityIndex);
});

// ปุ่ม Next
nextBtn.addEventListener('click', () => {
  activityIndex++;
  if (activityIndex >= activityCards.length) {
    activityIndex = 0; // วนกลับไปการ์ดแรก
  }
  updateActivitiesCarousel(activityIndex);
});