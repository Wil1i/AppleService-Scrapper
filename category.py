import requests, datetime
from bs4 import BeautifulSoup
from pandas import DataFrame

def startScrap(url):
    # check if url entered with correct format
    if not url.startswith("https://"):
        print("URL should starts with [ https:// ] Please try again.")
        exit()

    if "?page=" in url:
        print("Please delete page parameter and try again.")
        exit()


    page_number = 1
    category = url.split("/")[3]
    links = []
    IDs = []
    titles = []
    prices = []
    dates = []
    default_links = []

    today = datetime.date.today()
    date = datetime.datetime.now()
    date = str( datetime.datetime.combine(today, datetime.time(date.hour, date.minute)) )[:-3].replace(" ", " | ")

    while True:
        print(1)
        # get products on current page
        print(f"Getting products on page {page_number}")
        page = requests.get(f"{url}?page={page_number}")
        soup = BeautifulSoup(page.content, 'html.parser')

        product_container = soup.find('div', attrs={'id' : "js-product-list"})
        products_meta = product_container.find_all('div', attrs={'class' : 'product-meta'})

        for product_tag in products_meta:

            product = product_tag.find('h3', attrs={'class' : 'h3 product-title'}).find('a')
            product_link = f"{product.get("href").split(".html")[0]}.html"

            if not product_link in links:
                product_price = product_tag.find('span', attrs={'itemprop' : 'price'})
                default_links.append(product_link)

                try:
                    if int( product_link.split("/")[4].split("-")[0] ):
                        IDs.append(product_link.split("/")[4].split("-")[0])    
                except:
                    IDs.append("یافت نشد")

                try:
                    if int( product_link.split("/")[4].split("-")[0] ) and int( product_link.split("/")[4].split("-")[1] ):
                        product_link = product_link.replace(f"{product_link.split("/")[4].split("-")[1]}-", "")
                except:
                    pass

                if product_price and product_price.contents and product_price.contents[0]:
                    prices.append(product_price.contents[0])
                else:
                    prices.append("تنظیم نشده")

                links.append(product_link)
                dates.append(date)
                titles.append(product.contents[0])

        # check if another page is available
        next_page_arrow = soup.find('a', attrs={'rel' : 'next'})
        if not next_page_arrow: 
            break
        page_number += 1

    df = DataFrame({"شناسه" : IDs, "کنونیکال" : links, "نام محصول" : titles, "قیمت" : prices, "تاریخ گزارش" : dates, "لینک پیشفرض" : default_links})
    df.style.set_properties(**{'text-align': 'center'}).to_excel(f"./public/files/{category}.xlsx", sheet_name="sheet1", index=False)
    return {"productsCount" : len(links), "pagesCount" : page_number, "fileName" : f"{category}.xlsx"}