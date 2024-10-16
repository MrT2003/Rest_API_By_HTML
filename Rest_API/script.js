document.addEventListener("DOMContentLoaded", function () {
  const movieList = document.getElementById("movies");

  // Hàm lấy dữ liệu từ API
  // async function fetchMovies(page) {
  //     const url = `https://phim.nguonc.com/api/films/phim-moi-cap-nhat?page=${page}`;
  //     try {
  //         const response = await fetch(url);

  //         if (response.ok) {
  //             const data = await response.json();
  //             console.log('Dữ liệu API trả về:', data);

  //             // Trả về mảng 'items' chứa danh sách phim
  //             if (data && data.items) {
  //                 return data.items;
  //             } else {
  //                 console.error('Không tìm thấy danh sách phim');
  //                 return [];
  //             }
  //         } else {
  //             console.error('Phản hồi không thành công');
  //             return [];
  //         }
  //     } catch (error) {
  //         console.error('Lỗi khi tải dữ liệu:', error);
  //         return [];
  //     }
  // }
  async function fetchMovies(page) {
    const url = `https://phim.nguonc.com/api/films/phim-moi-cap-nhat?page=${page}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu:", error);
      return [];
    }
  }

  // function displayMovies(movies) {
  //     movies.forEach(movie => {
  //         const li = document.createElement('li');
  //         li.textContent = movie.title;
  //         movieList.appendChild(li);
  //     });
  // }

  // Hàm hiển thị phim lên giao diện
  function displayMovies(movies) {
    // if (!Array.isArray(movies)) {
    //     console.error('Dữ liệu không phải là mảng:', movies);
    //     return;
    // }

    movies.forEach((movie) => {
      const li = document.createElement("li");
      li.textContent = movie.title;
      movieList.appendChild(li);
    });

    // movies.forEach(movie => {
    //     const li = document.createElement('li');
    //     const img = document.createElement('img');
    //     // Điều chỉnh trường chính xác từ API
    //     img.src = movie.poster_url;
    //     img.alt = movie.title;
    //     img.style.width = '500px';

    //     const title = document.createElement('p');
    //     title.textContent = movie.title;

    //     li.appendChild(img);
    //     li.appendChild(title);
    //     movieList.appendChild(li);
    // });
  }

  // Lấy và hiển thị phim từ trang 1 đến 5
  async function loadMovies() {
    for (let page = 1; page <= 5; page++) {
      const movies = await fetchMovies(page);
      displayMovies(movies);
    }
  }

  // Gọi hàm khi trang được tải
  loadMovies();
});
