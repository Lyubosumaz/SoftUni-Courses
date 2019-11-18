package Nether_Realms_P13v01;

public class Demon {
    private String name;
    private Integer health;
    private Double damage;

    public Demon(String name, Integer health, Double damage) {
        this.name = name;
        this.health = health;
        this.damage = damage;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getHealth() {
        return health;
    }

    public void setHealth(Integer health) {
        this.health = health;
    }

    public Double getDamage() {
        return damage;
    }

    public void setDamage(Double damage) {
        this.damage = damage;
    }

    @Override
    public String toString() {
        return String.format("%s - %d health, %.2f damage", getName(), getHealth(), getDamage());
    }
}
