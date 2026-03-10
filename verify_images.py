from playwright.sync_api import sync_playwright

def verify_images():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:5174")

        # Wait for the images to load
        page.wait_for_selector('img[src="images/hero.jpg"]')
        page.wait_for_selector('img[src="images/about.jpg"]')

        page.screenshot(path="verification_hero.png", full_page=True)
        browser.close()

if __name__ == "__main__":
    verify_images()
