package purchases.taxmicroservice.event;

import org.springframework.context.ApplicationEvent;
import purchases.taxmicroservice.model.PurchaseEvent;

public class PurchaseToHandleEvent extends ApplicationEvent {

    private final PurchaseEvent purchaseEvent;

    public PurchaseToHandleEvent(Object source, PurchaseEvent purchaseEvent) {
        super(source);
        this.purchaseEvent = purchaseEvent;
    }

    public PurchaseEvent getPurchaseEvent() {
        return purchaseEvent;
    }
}
