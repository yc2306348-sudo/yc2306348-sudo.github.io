// 课程数据（你可以自己修改）
const courses = [
  {
    title: "诗经二十讲",
    lecturer: "李山",
    views: "214万",
    cover: "https://picsum.photos/400/225?random=1"
  },
  {
    title: "论语导读",
    lecturer: "杨逢彬",
    views: "185万",
    cover: "https://picsum.photos/400/225?random=2"
  },
  {
    title: "史记精讲",
    lecturer: "韩兆琦",
    views: "163万",
    cover: "https://picsum.photos/400/225?random=3"
  },
  {
    title: "中国通史",
    lecturer: "卜宪群",
    views: "298万",
    cover: "https://picsum.photos/400/225?random=4"
  },
  {
    title: "唐诗鉴赏",
    lecturer: "莫砺锋",
    views: "172万",
    cover: "https://picsum.photos/400/225?random=5"
  },
  {
    title: "四大名著解读",
    lecturer: "多位名师",
    views: "326万",
    cover: "https://picsum.photos/400/225?random=6"
  },
  {
    title: "书法艺术",
    lecturer: "邱振中",
    views: "98万",
    cover: "https://picsum.photos/400/225?random=7"
  },
  {
    title: "中医养生",
    lecturer: "翟双庆",
    views: "245万",
    cover: "https://picsum.photos/400/225?random=8"
  }
];

// 渲染页面
const list = document.getElementById("courseList");
courses.forEach(item => {
  const card = `
    <div class="course-card">
      <img src="${item.cover}" alt="封面">
      <div class="course-info">
        <div class="course-title">${item.title}</div>
        <div class="course-lecturer">主讲：${item.lecturer}</div>
        <div class="course-views">播放量 ${item.views}</div>
      </div>
    </div>
  `;
  list.innerHTML += card;
});
