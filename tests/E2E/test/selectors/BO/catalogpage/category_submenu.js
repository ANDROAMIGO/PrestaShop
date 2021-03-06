module.exports = {
    CategorySubMenu: {
        submenu: '//*[@id="subtab-AdminCategories"]/a',
        new_category_button: '//*[@id="page-header-desc-category-new_category"]/div',
        name_input: '//*[@id="name_1"]',
        description_textarea: 'textarea#description_1',
        picture: '//*[@id="image"]',
        thumb_picture: '//*[@id="thumb"]',
        title: '//*[@id="meta_title_1"]',
        meta_description: '//*[@id="meta_description_1"]',
        keyswords: '(//*[@id="fieldset_0"]//input[@placeholder="Add tag"])[1]',
        simplify_URL_input: '//*[@id="link_rewrite_1"]',
        save_button: '//*[@id="category_form_submit_btn"]',
        search_input: '//*[@id="table-category"]//input[@name="categoryFilter_name"]',
        search_button: '//*[@id="submitFilterButtoncategory"]',
        search_result: '//*[@id="table-category"]//td[3]',
        update_button: '//*[@id="table-category"]//td[7]/div/div',
        action_button: '//*[@id="table-category"]//td[7]//button[contains(@class, "dropdown-toggle")]',
        delete_button: '//*[@id="table-category"]//td[7]//a[@title="Delete"]',
        image_link: '//*[@id="image-images-thumbnails"]/div/img',
        thumb_link: '//*[@id="thumb-images-thumbnails"]/div/img',
        second_delete_button: '//*[@id="content"]//form//button[not(@name)]',
        select_category: '//*[@id="table-category"]/tbody/tr/td[1]/input',
        action_group_button: '//*[@id="form-category"]//div[contains(@class, "bulk-actions")]/button[contains(@class, "dropdown-toggle")]',
        delete_action_group_button: '//*[@id="form-category"]//a[contains(@onclick, "Delete selected")]',
        category_number_span: '//*[@id="form-category"]//span[@class="badge"]'
    }
};
