# Interaction Studio (Campaign Website DEMO)

## Sitemap JS

```javascript
Evergage.init({
  cookieDomain: "domain",
}).then(() => {
  const sitemapConfig = {
    global: {
      contentZones: [
        { name: "nav_bar_toggle_drawer", selector: "#nav_bar_toggle_drawer" },
        { name: "nav_bar_home_page_link", selector: "#nav_bar_home_page_link" },
        {
          name: "nav_bar_subscribe_button",
          selector: "#nav_bar_subscribe_button",
        },
      ],
      listeners: [
        Evergage.listener("click", "#subscribe_email_button", () => {
          const email = Evergage.cashDom("#subscribe_email_value").val();
          if (email) {
            Evergage.sendEvent({
              action: "Email Subscription",
              user: { id: email },
            });
          }
        }),
      ],
    },
    pageTypes: [
      {
        name: "home",
        isMatch: () => window.location.pathname === "/",
      },
      {
        name: "subscribe",
        isMatch: () => window.location.pathname === "/subscribe",
        contentZones: [
          {
            name: "subscribe_email_button",
            selector: "#subscribe_email_button",
          },
        ],
      },
    ],
  };
  Evergage.initSitemap(sitemapConfig);
});
```
