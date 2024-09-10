import React from 'react'

export default function OrderProcess() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center text-primary mb-8">Delivery Process</h1>

            <div className="space-y-12">
                {/* Step 1: Order Placement */}
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">1. Order Placement</h2>
                        <p className="text-lg text-gray-700">
                            Once you’ve chosen the items you want, place an order through our website by adding products to your cart and checking out. You will receive a confirmation email with your order details.
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0">
                        <img src="order-placement-image-url" alt="Order Placement" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </div>

                {/* Step 2: Order Processing */}
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 order-last md:order-first mt-6 md:mt-0">
                        <img src="order-processing-image-url" alt="Order Processing" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">2. Order Processing</h2>
                        <p className="text-lg text-gray-700">
                            Our team starts preparing your order as soon as it is confirmed. We ensure your items are packed safely and securely, ready for dispatch.
                        </p>
                    </div>
                </div>

                {/* Step 3: Shipping & Delivery */}
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">3. Shipping & Delivery</h2>
                        <p className="text-lg text-gray-700">
                            Once packed, your order is handed over to our trusted delivery partners. You will receive a tracking number via email to follow the progress of your package. Delivery usually takes 3-7 business days, depending on your location.
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0">
                        <img src="shipping-delivery-image-url" alt="Shipping & Delivery" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </div>

                {/* Step 4: Order Completion */}
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 order-last md:order-first mt-6 md:mt-0">
                        <img src="order-completion-image-url" alt="Order Completion" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">4. Order Completion</h2>
                        <p className="text-lg text-gray-700">
                            Your order is delivered to your doorstep. If you have any issues or concerns, feel free to contact our customer support team, and we will assist you promptly.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
