<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

        <title>Aileron - Kasir</title>

        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body>
        <div class="content-wrapper">
            <div class="left-panel">
                <div class="left-panel--navbar">
                    <button class="btn btn-dark btn-lg border-0">
                        <svg class="bi" width="32" height="32" fill="currentColor">
                            <use xlink:href="{{ mix('/fonts/bootstrap-icons.svg#list') }}"/>
                        </svg>
                    </button>
                    <div class="d-flex">
                        <button class="btn btn-dark btn-lg border-0">
                            <svg class="bi" width="24" height="24" fill="currentColor">
                                <use xlink:href="{{ mix('/fonts/bootstrap-icons.svg#grid') }}"/>
                            </svg>
                        </button>

                        <button class="btn btn-dark btn-lg border-0">
                            <svg class="bi" width="24" height="24" fill="currentColor">
                                <use xlink:href="{{ mix('/fonts/bootstrap-icons.svg#funnel') }}"/>
                            </svg>
                        </button>

                        <button class="btn btn-dark btn-lg border-0">
                            <svg class="bi" width="24" height="24" fill="currentColor">
                                <use xlink:href="{{ mix('/fonts/bootstrap-icons.svg#search') }}"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="product-wrap">
                    <div class="product-wrap--category-list">
                        <button class="btn btn-light rounded-0">Makanan</button>
                        <button class="btn btn-light rounded-0">Minuman</button>
                        <button class="btn btn-light rounded-0">Semua Produk</button>
                    </div>
                    <div class="product-wrap--product-list">

                    </div>
                </div>
            </div>
            <div class="detail-pesanan">

            </div>
        </div>
    </body>
    <script src="{{ asset('js/app.js') }}" defer></script>
</html>
