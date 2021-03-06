<?php
include_once '../example-runner/example-runners.php';
include_once '../includes/html-helpers.php';
$DONT_USE_FONT_AWESOME=true;
$version = 'latest';

$rootFolder;
if (strcmp($version, 'latest') == 0) {
    $rootFolder = '/';
} else {
    $rootFolder = '/archive/' . $version . '/';
}

if (basename($_SERVER['PHP_SELF']) == 'index.php') {
    $parts = explode('/', dirname($_SERVER['PHP_SELF']));
    // 'my-fancy-best-dir-name/'
    $article_id = end($parts). "/";
} else {
    // 'my-fancy-best-dir-name/file.php'
    $parts = explode('/', $_SERVER['PHP_SELF']);
    $article_id = join('/', array_slice($parts, -2, 2));
}

define('DOC_SECTION', $article_id);
?>
<!DOCTYPE html>
<html lang="en">
<head lang="en">
<?php
meta_and_links($pageTitle, $pageKeywords, $pageDescription, false);
?>
<link rel="stylesheet" href="../dist/docs.css">
</head>

<body ng-app="documentation">
<header id="nav" class="compact">
<?php
    $navKey = "getting-started";
    include '../includes/navbar.php';
 ?>
</header>

<div id="documentation">
    <div>
<?php if (!defined('skipLeftNav')) { ?>
    <aside id="side-nav">
      <div id="side-nav-container" class="collapse flat">
          <ul>
            <li><a class="<?=($article_id == "javascript-grid/" ? 'active' : '') ?>" href="../javascript-grid/">Vanilla JavaScript</a></li>
            <li><a class="<?=($article_id == "angular-grid/" ? 'active' : '') ?>" href="../angular-grid/">Angular</a></li>
            <li><a class="<?=($article_id == "react-grid/" ? 'active' : '') ?>" href="../react-grid/">React</a></li>
            <li><a class="<?=($article_id == "vue-getting-started/" ? 'active' : '') ?>" href="../vuejs-grid/">Vue.js</a></li>
            <li><hr></li>
            <li class="misc"><a class="<?=($article_id == "angular-grid/" ? 'active' : '') ?>" href="../angular-grid/">AngularJS 1.x</a></li>
            <li class="misc"><a class="<?=($article_id == "polymer-getting-started/" ? 'active' : '') ?>" href="../polymer-getting-started/">Polymer</a></li>
            <li><hr></li>
            <li class="misc"><a class="<?=($article_id == "ag-grid-tutorials/" ? 'active' : '') ?>" href="../ag-grid-tutorials/">Tutorial</a></li>
          </ul>
      </div>
    </aside>
<?php } ?>

    <section id="content" class="<?php echo defined('skipInPageNav') ? 'skip-in-page-nav' : '' ?> <?php echo defined('skipLeftNav') ? 'skip-left-nav' : '' ?>">
