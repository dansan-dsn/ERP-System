<?php
  include('header.php');
?>

<main class="site-wrapper">
  <div class="pt-table">
    <div class="pt-tablecell page-home relative" style="background-image: url('images/banner.jpg');">
      <div class="overlay"></div>

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
            <div class="page-title home text-center">
              <img src="images/phantom.png" alt="">
              <p>An Expense manager platform. Learn and track how you spend your money.</p>
            </div>

            <div class="hexagon-menu clear">
              <div class="hexagon-item">
                <div class="hex-item">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="hex-item">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <a href="income.php" class="hex-content">
                  <span class="hex-content-inner">
                    <span class="icon">
                      <i class="tf-dial"></i>
                    </span>
                    <span class="title">Income</span>
                  </span>
                  <svg viewbox="0 0 173.20508075688772 200" height="200" width="174" version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"></path>
                  </svg>
                </a>
              </div>
              <div class="hexagon-item">
                <div class="hex-item">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="hex-item">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <a href="expenditure.php" class="hex-content">
                  <span class="hex-content-inner">
                    <span class="icon">
                      <i class="tf-profile-male"></i>
                    </span>
                    <span class="title">Expenditure</span>
                  </span>
                  <svg viewbox="0 0 173.20508075688772 200" height="200" width="174" version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path>
                  </svg>
                </a>
              </div>
              <div class="hexagon-item">
                <div class="hex-item">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="hex-item">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <a href="loans.php" class="hex-content">
                  <span class="hex-content-inner">
                    <span class="icon">
                      <i class="tf-tools-2"></i>
                    </span>
                    <span class="title">Loans</span>
                  </span>
                  <svg viewbox="0 0 173.20508075688772 200" height="200" width="174" version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path>
                  </svg>
                </a>
              </div>
            </div> <!-- /.hexagon-menu -->

          </div> <!-- /.col-xs-12 -->

        </div> <!-- /.row -->
      </div> <!-- /.container -->

    </div> <!-- /.pt-tablecell -->
  </div> <!-- /.pt-table -->
</main> <!-- /.site-wrapper -->

<?php
  include('footer.php');
?>
