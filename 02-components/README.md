## Component-Based Architecture

### Concept

In React, an application is broken down into small, independent, reusable blocks of code called **components**. Each component is responsible for rendering a small, specific part of the UI.

### Real-Life Example: An E-Commerce Product Page

Imagine an e-commerce website product page (like Amazon or Etsy). Instead of building the entire page as one massive chunk of code, it's divided into components:

|**Component Name**|**Responsibility**|**Reusability**|
|---|---|---|
|`Header`|Displays the logo, search bar, and cart icon.|Used on **every single page** of the site.|
|`ProductImage`|Shows the main image and image gallery.|Reused for **every product** on the site.|
|`ProductDetails`|Shows the title, price, description, and rating.|Reused for **every product** on the site.|
|`AddToCartButton`|Handles the logic for adding an item to the cart.|Used on **every product details page** and **quick view popups**.|
|`ReviewsList`|Displays a list of customer reviews.|Used on the product page, and potentially a dedicated reviews page.|

**The benefit:** If you need to change how the `AddToCartButton` works (e.g., adding a new animation), you only change the code in that one component. This change is then instantly reflected everywhere the button is used.