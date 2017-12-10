/**
 * Created by jvfiel on 12/10/17.
 */
frappe.call({
    method: "frappe.client.get_value",
    args: {
        doctype: "Crisp Settings",
        fieldname: "crisp_website_id",
        filters: ""
    },
    callback: function (r) {
        // callback && callback(r.message);
        // console.log(r);
        window.$crisp = [];
        // console.log(r.message.crisp_website_id);
        window.CRISP_WEBSITE_ID = r.message.crisp_website_id;
        // (function () {
        //     d = document;
        //     s = d.createElement("script");
        //     s.src = "https://client.crisp.im/l.js";
        //     s.async = 1;
        //     d.getElementsByTagName("head")[0].appendChild(s);
        // })();

        (function(){d=document;s=d.createElement("script");
            s.src="https://client.crisp.chat/l.js";
            s.async=1;
            d.getElementsByTagName("head")[0].appendChild(s);
        })();

        $crisp.push(["set", "user:email", frappe.boot.user.email]);
        $crisp.push(["set", "user:nickname", frappe.user_info(frappe.boot.user.name).fullname]);
    }
});
