/**
 * Created by jvfiel on 12/10/17.
 */
window.$crisp = [];
window.CRISP_WEBSITE_ID = frappe.defaults.get_user_default("Crisp ID");
(function () {
    d = document;
    s = d.createElement("script");
    s.src = "https://client.crisp.im/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
})();
$crisp.push(["set", "user:email", frappe.boot.user.email]);
$crisp.push(["set", "user:nickname", frappe.user_info(frappe.boot.user.name).fullname]);